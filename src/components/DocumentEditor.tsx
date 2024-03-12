import {InitialConfigType, InitialEditorStateType, LexicalComposer} from '@lexical/react/LexicalComposer';
import EditorTheme from "../themes/EditorTheme.ts";
import EditorNodes from "../nodes/EditorNodes.ts";
import {SharedHistoryContext} from "../context/SharedHistoryContext.tsx";
import Editor from "./Editor.tsx";
import {DataMentionNode} from "../nodes/DataMentionNode.tsx";
import {HistoryState} from "@lexical/react/LexicalHistoryPlugin";
import React from "react";
import {EditorState} from "lexical";
import {DataMentionObject} from "../plugins/DataMentionPlugin";

export interface DocumentEditorProps {
    editorState?: InitialEditorStateType;
    historyState?: HistoryState;
    step?: 1 | 2 | 3;
    onChange?: (editorState: EditorState) => void;
    autoMentionData?: DataMentionObject[]
    autoAfterMentionData?: DataMentionObject[]
}

function DocumentEditor(props: DocumentEditorProps): React.ReactElement {
    const {
        editorState,
        historyState,
        onChange,
        autoAfterMentionData = [],
        autoMentionData = [],
        step = 1
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
            <SharedHistoryContext initHistoryState={historyState}>
                <div className="editor-shell">
                    <Editor step={step} autoAfterMentionData={autoAfterMentionData} autoMentionData={autoMentionData} onChange={onChange}/>
                </div>
            </SharedHistoryContext>
        </LexicalComposer>
    )
}

export default DocumentEditor;
