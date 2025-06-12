import {InitialConfigType, InitialEditorStateType, LexicalComposer} from '@lexical/react/LexicalComposer';
import EditorTheme from "./themes/EditorTheme.ts";
import EditorNodes from "./nodes/EditorNodes.ts";
import {SharedHistoryContext} from "./context/SharedHistoryContext.tsx";
import Editor from "./Editor.tsx";
import {DataMentionNode} from "./nodes/DataMentionNode.tsx";
import {HistoryState} from "@lexical/react/LexicalHistoryPlugin";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin"
import React, {forwardRef} from "react";
import {LexicalEditor, SerializedEditorState} from 'lexical'
import {DataMentionObject} from "./plugins/DataMentionPlugin";
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
    autoMentionData?: DataMentionObject[]
    autoAfterMentionData?: DataMentionObject[]
    editorRef?: React.MutableRefObject<LexicalEditor | null | undefined>;
    showTableOfContents?: boolean;
}

const DocumentEditor = forwardRef<ReactDocEditorRef, DocumentEditorProps>((props, ref) => {
    const {
        editorState,
        historyState,
        onChange,
        showTableOfContents,
        autoAfterMentionData = [],
        autoMentionData = [],
        step = 1,
        editorRef = {current: null},
        imageUploadCallback,
    } = props;

    DataMentionNode.prototype.defaultStep = step;

    const initialConfig: InitialConfigType = {
        editorState: editorState,
        namespace: 'Doc App',
        editable: step === 1,
        theme: EditorTheme,
        onError: (error: Error) => {
            console.log('Error:', error.message)
        },
        nodes: [...EditorNodes, DataMentionNode],
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <EditorRefPlugin editorRef={editorRef} />
            <SharedHistoryContext initHistoryState={historyState}>
                <div className="doc-editor-shell">
                    <Editor
                      step={step}
                      autoAfterMentionData={autoAfterMentionData}
                      autoMentionData={autoMentionData}
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
