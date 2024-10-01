import { InitialEditorStateType } from '@lexical/react/LexicalComposer';
import { HistoryState } from '@lexical/react/LexicalHistoryPlugin';
import { default as React } from 'react';
import { EditorState, LexicalEditor } from 'lexical';
import { DataMentionObject } from '../plugins/DataMentionPlugin';

export interface DocumentEditorProps {
    editorState?: InitialEditorStateType;
    historyState?: HistoryState;
    step?: 1 | 2 | 3;
    onChange?: (editorState: EditorState, editor: LexicalEditor, tags: Set<string>) => void;
    autoMentionData?: DataMentionObject[];
    autoAfterMentionData?: DataMentionObject[];
}
declare function DocumentEditor(props: DocumentEditorProps): React.ReactElement;
export default DocumentEditor;
//# sourceMappingURL=DocumentEditor.d.ts.map