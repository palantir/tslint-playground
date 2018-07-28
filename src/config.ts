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

export const RULESETS = ["recommended", "all", "latest"];
export const EXCLUDED_RULES = ["no-implicit-dependencies"];

export const DEFAULT_CONFIG =
`// You can modify the configuration here with your own.
// Make sure that your json is valid, and if you run into
// other issues, try checking the console for errors.

{
    "extends": ["tslint:recommended"],
    "rules": {} // add additional rules and their configuration
}
`;

export const DEFAULT_CODE = `// Start typing in the code box to get started.

console.log("Errors");

`;
