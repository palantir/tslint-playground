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

import { Alignment, Button, Intent, Navbar } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { flex1, flexRoot, margin, vertical } from "csstips";
import * as React from "react";
import * as CopyToClipboard from "react-copy-to-clipboard";
import {
  Mosaic,
  MosaicBranch,
  MosaicNode,
  MosaicWindow
} from "react-mosaic-component";
import * as stripJsonComments from "strip-json-comments";
import { LintResult } from "tslint";
import { style } from "typestyle";
import "../../node_modules/react-mosaic-component/react-mosaic-component.css";
import { DEFAULT_CODE, DEFAULT_CONFIG } from "../config";
import { BrowserLinter } from "../linter";
import { failureToMarker, generateUrl } from "../utils";
import { CodeEditor } from "./CodeEditor";

type WindowType = "code" | "config" | "output";

export interface IAppState {
  config: string;
  code: string;
  lintResult: LintResult | undefined;
  windowLayout: MosaicNode<WindowType>;
  configError: boolean;
}

const TslintMosaic = Mosaic.ofType<WindowType>();
const TslintMosaicWindow = MosaicWindow.ofType<WindowType>();

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

class App extends React.Component<{}, IAppState> {
  public linter: BrowserLinter;
  public state: IAppState = {
    code: DEFAULT_CODE,
    config: DEFAULT_CONFIG,
    configError: false,
    lintResult: undefined,
    windowLayout: {
      direction: "column",
      first: {
        direction: "row",
        first: "config",
        second: "code"
      },
      second: "output",
      splitPercentage: 75
    }
  };

  public componentDidMount() {
    this.linter = new BrowserLinter();

    const { code } = this.state;
    const urlParameters = new URLSearchParams(window.location.search);

    if (urlParameters.has("config")) {
      const configParameter = decodeURIComponent(
        urlParameters.get("config") || ""
      );
      this.handleConfigChange(configParameter);
    }

    if (urlParameters.has("code")) {
      const codeParameter = decodeURIComponent(urlParameters.get("code") || "");
      this.handleCodeChange(codeParameter);
    } else {
      this.handleCodeChange(code);
    }
  }

  public render() {
    const { windowLayout, code, config, lintResult } = this.state;

    return (
      <div className={Style.app}>
        {this.renderHeader()}
        <TslintMosaic
          renderTile={this.renderTile(code, config, lintResult)}
          value={windowLayout}
          onChange={this.handleWindowChange}
        />
      </div>
    );
  }

  private handleWindowChange = (windowLayout: MosaicNode<WindowType>) => {
    this.setState({ windowLayout });
  };

  private renderTile = (
    code: string,
    config: string,
    lintResult: LintResult | undefined
  ) => {
    return (id: WindowType, path: MosaicBranch[]) => {
      const markers =
        lintResult !== undefined && lintResult.failures !== undefined
          ? lintResult.failures.map(failureToMarker)
          : [];

      const ELEMENT_MAP: { [id: string]: JSX.Element } = {
        code: (
          <CodeEditor
            language="typescript"
            onChange={this.handleCodeChange}
            value={code}
            title="Code"
            markers={markers}
          />
        ),
        config: (
          <CodeEditor
            language="json"
            onChange={this.handleConfigChange}
            value={config}
            title="Configuration"
          />
        ),
        output: this.maybeRenderResults()
      };
      return (
        <TslintMosaicWindow
          title={`${capitalizeFirstLetter(id)}`}
          path={path}
          additionalControls={false}
          toolbarControls={<div />}
        >
          {ELEMENT_MAP[id]}
        </TslintMosaicWindow>
      );
    };
  };

  private renderHeader = () => {
    const { config, code } = this.state;
    const queryString = generateUrl(code, config);
    const clipboardText = `${window.location.origin}${queryString}`;

    return (
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>TSLint Playground</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <CopyToClipboard text={clipboardText} onCopy={this.handleSaveToURL}>
            <Button
              intent={Intent.PRIMARY}
              icon={IconNames.FLOPPY_DISK}
              text="Save to URL"
            />
          </CopyToClipboard>
        </Navbar.Group>
      </Navbar>
    );
  };

  private handleSaveToURL = () => {
    const { code, config } = this.state;
    window.history.replaceState(
      undefined,
      undefined,
      generateUrl(code, config)
    );
  };

  private renderOutput = () => {
    const { lintResult, configError } = this.state;

    if (configError) {
      return "Error parsing json";
    }

    if (lintResult !== undefined) {
      return lintResult.output;
    }

    return "Success! No linting errors!";
  };

  private maybeRenderResults = () => {
    return (
      <div className={Style.linterOutput}>
        <pre className={Style.linterOutputInner}>{this.renderOutput()}</pre>
      </div>
    );
  };

  private getConfig = (config: string) => {
    try {
      const json = JSON.parse(stripJsonComments(config));
      this.setState({ configError: false });
      return json;
    } catch {
      this.setState({ configError: true });
    }
  };

  private handleConfigChange = async (config: string) => {
    const { code } = this.state;
    this.setState({ config });
    this.handleLint(code, config);
  };

  private handleCodeChange = async (code: string) => {
    const { config } = this.state;
    this.setState({ code });
    this.handleLint(code, config);
  };

  private handleLint = async (code: string, config: string) => {
    const configObj = this.getConfig(config);
    const lintResult = await this.linter.runLint(code, configObj);
    this.setState({ lintResult });
  };
}

export default App;

// tslint:disable-next-line:no-namespace
namespace Style {
  export const app = style(vertical, { height: "100%" });
  export const appInner = style(vertical, flex1);
  export const container = style(flex1, { position: "relative" });

  export const linterOutput = style(
    {
      background: "#fefefe",
      height: "100%",
      width: "100%"
    },
    flexRoot
  );
  export const linterOutputInner = style(margin(10), flex1);

  export const splitPane = style({
    $nest: {
      [`div:last`]: {
        border: "1px solid red"
      }
    }
  });
}
