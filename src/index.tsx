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

import { normalize, setupPage } from "csstips/lib";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { cssRaw } from "typestyle";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import App from "./components/App";

normalize();
setupPage("#root");

cssRaw(`
.mosaic-window .mosaic-window-toolbar {
    z-index: 1;
    border-bottom: 1px solid rgba(16, 22, 26, 0.15);
}

.mosaic-window .mosaic-window-body {
    overflow: unset;
}
`);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
