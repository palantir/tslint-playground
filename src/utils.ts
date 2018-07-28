/**
 * @license
 * Copyright 2018 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as monacoEditor from "monaco-editor";
import { IConfigurationFile } from "tslint/lib/configuration";
import { IOptions, RuleFailure } from "tslint/lib/language/rule/rule";
import { AbstractRule } from "tslint/lib/rules";
import { EXCLUDED_RULES, RULESETS } from "./config";

interface IBrowserRule {
  Rule: AbstractRule;
}

interface IBrowserRuleInfo {
  config: IOptions;
  kebabName: string;
  rule: Promise<IBrowserRule>;
  ruleName: string;
}

/**
 * Convert kebab-case to camelCase.
 * @param str string to convert
 */
export const toCamelCase = (str: string) =>
  str.replace(/-([a-z])/g, g => g[1].toUpperCase());

/**
 * Dynamic import for a single rule, returns (a promise for) the imported rule
 * as well as rule metadata.
 * @param kebabName kebab-case-name for the rule
 * @param ruleSet the ruleset to pull the rule config from
 */
const getRule = (
  kebabName: string,
  ruleSet: Map<string, Partial<IOptions>>
): IBrowserRuleInfo => {
  const ruleName = toCamelCase(kebabName);
  return {
    config: ruleSet[kebabName],
    kebabName,
    rule: import(`tslint/lib/rules/${ruleName}Rule`),
    ruleName
  };
};

/**
 * Get rule objects for rule set, and override them with custom rules object.
 * @param extendsString the rule set to extend (undefined, recommended etc)
 * @param rulesObject override for custom rules
 */
export const getRules = async (
  extendsString: string | undefined,
  rulesObject: Map<string, Partial<IOptions>>
): Promise<AbstractRule[]> => {
  // Get the rule list
  const extendedRulesSet: Map<string, Partial<IOptions>> =
    extendsString !== undefined
      ? (await import(`tslint/lib/configs/${extendsString}`)).rules
      : {};

  // Combine with rule overrides to get the full set
  const ruleSet = { ...extendedRulesSet, ...rulesObject };

  // Filter to rules that work, and then construct rule objects
  const ruleObjects = Object.keys(ruleSet)
    .filter(kebabName => EXCLUDED_RULES.indexOf(kebabName) === -1)
    .map(kebabName => getRule(kebabName, ruleSet));

  // Run all the promises to pull in each rule
  const rules: IBrowserRule[] = await Promise.all(
    ruleObjects.map(rule => rule.rule)
  );

  // Return rules
  return rules
    .filter(rulePromise => rulePromise.Rule !== undefined)
    .map(({ Rule }, index) => {
      const ruleObject = ruleObjects[index];

      // @ts-ignore
      return new Rule({
        ruleName: ruleObject.kebabName,
        ruleSeverity: "error",
        ...convertToNewConfig(ruleObject.config)
      });
    });
};

/**
 * Get the ruleset name from configuration file.
 * @param configuration configuration to get the rule from
 */
export const getRuleSet = (configuration: IConfigurationFile) => {
  if (
    configuration === undefined ||
    configuration.extends === undefined ||
    configuration.extends.length === 0
  ) {
    return undefined;
  }
  const ruleset = configuration.extends[0].split("tslint:")[1];
  if (RULESETS.indexOf(ruleset) > -1) {
    return ruleset;
  }
  return undefined;
};

function isBoolean(bool: any): bool is boolean {
  return typeof bool === typeof true;
}

/**
 * Convert all config types to the new style of config
 * @param oldConfig the old configuration object
 */
const convertToNewConfig = (oldConfig: IOptions | any[] | boolean): object => {
  if (oldConfig instanceof Array) {
    return {
      ruleArguments: oldConfig.slice(1)
    };
  } else if (isBoolean(oldConfig)) {
    return {
      ruleArguments: []
    };
  }
  return oldConfig;
};

/**
 * Convert config and code variables to URL query string
 * @param code the text from the code textbox
 * @param config the text from the config textbox
 */
export const generateUrl = (code: string, config: string) => {
  return `?code=${encodeURIComponent(code)}&config=${encodeURIComponent(
    config
  )}`;
};

/**
 * Convert a tslint failure to an aceeditor marker
 * @param failure The failure to be converted
 */
export const failureToMarker = (
  failure: RuleFailure
): monacoEditor.editor.IMarkerData => {
  return {
    endColumn: failure.getEndPosition().getLineAndCharacter().character + 1,
    endLineNumber: failure.getEndPosition().getLineAndCharacter().line + 1,
    message: failure.getFailure(),
    severity: monacoEditor.MarkerSeverity.Error,
    startColumn: failure.getStartPosition().getLineAndCharacter().character,
    startLineNumber: failure.getStartPosition().getLineAndCharacter().line + 1
  };
};
