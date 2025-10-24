import {InitialConfigType, InitialEditorStateType, LexicalComposer} from '@lexical/react/LexicalComposer';
import EditorTheme from "./themes/EditorTheme.ts";
import EditorNodes from "./nodes/EditorNodes.ts";
import {SharedHistoryContext} from "./context/SharedHistoryContext.tsx";
import Editor from "./Editor.tsx";
import {HistoryState} from "@lexical/react/LexicalHistoryPlugin";
import {EditorRefPlugin} from "@lexical/react/LexicalEditorRefPlugin"
import React, {forwardRef} from "react";
import {LexicalEditor, SerializedEditorState} from 'lexical'
import {AutofillDataObject} from "./plugins/AutofillPlugin/TriggerAutofill.tsx";
import './styles.css';
import {AutofillStage, SerializedAutofillNode} from "./nodes/AutofillNode.ts";

export type UploadCallbackType = (file: File, result: string, callback: (url: string) => void) => void

export interface ImageUploadCallback {
  imageUploadCallback?: UploadCallbackType
}

export type ExportData = {
  serializedEditorState: SerializedEditorState;
  htmlContent: string;
  plainContent: string;
}

export type ReactDocEditorRef = {
  exportData: () => ExportData
  updateEditorState: (editorState: InitialEditorStateType) => void
  getEditor: () => LexicalEditor
  extractAllInputNodes: () => SerializedAutofillNode[]
}

export interface DocumentEditorProps extends ImageUploadCallback {
  editorState?: InitialEditorStateType;
  historyState?: HistoryState;
  stage?: AutofillStage;
  onChange?: (data: ExportData) => void;
  autofillPreData?: AutofillDataObject[]
  autofillPostData?: AutofillDataObject[]
  editorRef?: React.MutableRefObject<LexicalEditor | null | undefined>;
  inputNodes?: SerializedAutofillNode[]
  showTableOfContents?: boolean;
}

const DocumentEditor = forwardRef<ReactDocEditorRef, DocumentEditorProps>((props, ref) => {
  const {
    editorState,
    historyState,
    onChange,
    showTableOfContents,
    autofillPreData = [],
    autofillPostData = [],
    stage = 1,
    editorRef = {current: null},
    imageUploadCallback,
    inputNodes
  } = props;

  const initialConfig: InitialConfigType = {
    editorState: editorState,
    namespace: 'Doc App',
    editable: stage === 1,
    theme: EditorTheme,
    onError: (error: Error) => {
      console.log('Error:', error.message)
    },
    nodes: EditorNodes,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <EditorRefPlugin editorRef={editorRef}/>
      <SharedHistoryContext initHistoryState={historyState}>
        <div className="doc-editor-shell">
          <Editor
            stage={stage}
            autofillPostData={autofillPostData}
            autofillPreData={autofillPreData}
            onChange={onChange}
            showTableOfContents={showTableOfContents}
            ref={ref}
            imageUploadCallback={imageUploadCallback}
            inputNodes={inputNodes}
          />
        </div>
      </SharedHistoryContext>
    </LexicalComposer>
  )
})

export default DocumentEditor;
