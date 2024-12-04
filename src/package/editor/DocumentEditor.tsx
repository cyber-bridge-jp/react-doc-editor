import {InitialConfigType, InitialEditorStateType, LexicalComposer} from '@lexical/react/LexicalComposer';
import EditorTheme from "./themes/EditorTheme.ts";
import EditorNodes from "./nodes/EditorNodes.ts";
import {SharedHistoryContext} from "./context/SharedHistoryContext.tsx";
import Editor from "./Editor.tsx";
import {DataMentionNode} from "./nodes/DataMentionNode.tsx";
import {HistoryState} from "@lexical/react/LexicalHistoryPlugin";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin"
import React from "react";
import {EditorState, LexicalEditor} from 'lexical'
import {DataMentionObject} from "./plugins/DataMentionPlugin";
import './styles.css';

export interface DocumentEditorProps {
    editorState?: InitialEditorStateType;
    historyState?: HistoryState;
    step?: 1 | 2 | 3;
    onChange?: (editorState: EditorState, editor: LexicalEditor, tags: Set<string>) => void;
    autoMentionData?: DataMentionObject[]
    autoAfterMentionData?: DataMentionObject[]
    editorRef?: React.MutableRefObject<LexicalEditor | null | undefined>;
    showTableOfContents?: boolean;
}

function DocumentEditor(props: DocumentEditorProps): React.ReactElement {
    const {
        editorState,
        historyState,
        onChange,
        showTableOfContents,
        autoAfterMentionData = [],
        autoMentionData = [],
        step = 1,
        editorRef = {current: null},
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
                    />
                </div>
            </SharedHistoryContext>
        </LexicalComposer>
    )
}

export default DocumentEditor;
