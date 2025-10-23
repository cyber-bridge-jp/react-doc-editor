import {InitialConfigType, InitialEditorStateType, LexicalComposer} from '@lexical/react/LexicalComposer';
import EditorTheme from "./themes/EditorTheme.ts";
import EditorNodes from "./nodes/EditorNodes.ts";
import {SharedHistoryContext} from "./context/SharedHistoryContext.tsx";
import Editor from "./Editor.tsx";
import {HistoryState} from "@lexical/react/LexicalHistoryPlugin";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin"
import React, {forwardRef} from "react";
import {LexicalEditor, SerializedEditorState} from 'lexical'
import {AutofillDataObject} from "./plugins/AutofillPlugin/TriggerAutofill.tsx";
import './styles.css';

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
}

export interface DocumentEditorProps extends ImageUploadCallback{
    editorState?: InitialEditorStateType;
    historyState?: HistoryState;
    step?: 1 | 2 | 3;
    onChange?: (data: ExportData) => void;
    autofillPreData?: AutofillDataObject[]
    autofillPostData?: AutofillDataObject[]
    editorRef?: React.MutableRefObject<LexicalEditor | null | undefined>;
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
        step = 1,
        editorRef = {current: null},
        imageUploadCallback,
    } = props;

    const initialConfig: InitialConfigType = {
        editorState: editorState,
        namespace: 'Doc App',
        editable: step === 1,
        theme: EditorTheme,
        onError: (error: Error) => {
            console.log('Error:', error.message)
        },
        nodes: EditorNodes,
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <EditorRefPlugin editorRef={editorRef} />
            <SharedHistoryContext initHistoryState={historyState}>
                <div className="doc-editor-shell">
                    <Editor
                      step={step}
                      autofillPostData={autofillPostData}
                      autofillPreData={autofillPreData}
                      onChange={onChange}
                      showTableOfContents={showTableOfContents}
                      ref={ref}
                      imageUploadCallback={imageUploadCallback}
                    />
                </div>
            </SharedHistoryContext>
        </LexicalComposer>
    )
})

export default DocumentEditor;
