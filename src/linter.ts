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

import {
  getSourceFile,
  IRule,
  LintResult,
  removeDisabledFailures,
  RuleFailure,
  RuleSeverity
} from "tslint";
import { DEFAULT_CONFIG, IConfigurationFile } from "tslint/lib/configuration";
import { Formatter as StylishFormatter } from "tslint/lib/formatters/stylishFormatter";
import { flatMap } from "tslint/lib/utils";
import { SourceFile } from "typescript";
import { getRules, getRuleSet } from "./utils";

export class BrowserLinter {
  // extends tslint.Linter, but has some type issues so can't properly extend it
  public async runLint(
    source: string,
    configuration: IConfigurationFile = DEFAULT_CONFIG
  ): Promise<LintResult | undefined> {
    const sourceFile = getSourceFile("file.ts", source);
    const ruleSet = getRuleSet(configuration);
    const enabledRules = await getRules(ruleSet, configuration.rules);
    const failures = this.getAllFailures(sourceFile, enabledRules);
    if (failures.length === 0) {
      return;
    }

    // add rule severity to failures
    const ruleSeverityMap = new Map(
      enabledRules.map(
        (rule): [string, RuleSeverity] => [
          rule.getOptions().ruleName,
          rule.getOptions().ruleSeverity
        ]
      )
    );

    for (const failure of failures) {
      const severity = ruleSeverityMap.get(failure.getRuleName());
      if (severity === undefined) {
        throw new Error(
          `Severity for rule '${failure.getRuleName()}' not found`
        );
      }
      failure.setRuleSeverity(severity);
    }

    const errors = failures.filter(
      failure => failure.getRuleSeverity() === "error"
    );
    const errorCount = errors.length;
    return {
      errorCount,
      failures,
      format: "stylish",
      output: new StylishFormatter().format(failures),
      warningCount: failures.length - errorCount
    };
  }

  private getAllFailures(
    sourceFile: SourceFile,
    enabledRules: IRule[]
  ): RuleFailure[] {
    const failures = flatMap(enabledRules, rule =>
      this.applyRule(rule, sourceFile)
    );
    return removeDisabledFailures(sourceFile, failures);
  }

  private applyRule(rule: IRule, sourceFile: SourceFile): RuleFailure[] {
    try {
      return rule.apply(sourceFile);
    } catch (error) {
      return [];
    }
  }
}
