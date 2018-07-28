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

import { isEqual } from "lodash-es";
import * as monacoEditor from "monaco-editor";
import * as React from "react";
import MonacoEditor from "react-monaco-editor";

export interface ICodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  title: string;
  markers?: monacoEditor.editor.IMarkerData[];
}

interface IMonacoEditor {
  editor: monacoEditor.editor.IEditor;
}

const EDITOR_OPTIONS: monacoEditor.editor.IEditorConstructionOptions = {
  automaticLayout: true,
  contextmenu: false,
  fixedOverflowWidgets: true,
  minimap: {
    enabled: false
  },
  renderLineHighlight: "none",
  scrollBeyondLastLine: false
};

export class CodeEditor extends React.Component<ICodeEditorProps> {
  private monaco: MonacoEditor;
  private refHandlers = {
    monaco: (ref: MonacoEditor) => (this.monaco = ref)
  };

  public componentWillReceiveProps(newProps: ICodeEditorProps) {
    if (
      !isEqual(newProps.markers, this.props.markers) &&
      newProps.markers !== undefined
    ) {
      // @ts-ignore
      const editor: monacoEditor.editor.ICodeEditor = (this
        .monaco as IMonacoEditor).editor;
      const model = editor.getModel();
      if (model != null) {
        monacoEditor.editor.setModelMarkers(model, "browser", newProps.markers);
      }
    }
  }

  public render() {
    const { value, onChange, language } = this.props;
    return (
      <MonacoEditor
        ref={this.refHandlers.monaco}
        language={language}
        theme="vs"
        value={value}
        options={EDITOR_OPTIONS}
        onChange={onChange}
      />
    );
  }
}
