import { InitialEditorStateType } from '@lexical/react/LexicalComposer';
import { HistoryState } from '@lexical/react/LexicalHistoryPlugin';
import { default as React } from 'react';
import { EditorState, LexicalEditor, SerializedEditorState } from 'lexical';
import { DataMentionObject } from './plugins/DataMentionPlugin';

export type UploadCallbackType = (file: File, result: string, callback: (url: string) => void) => void;
export interface ImageUploadCallback {
    imageUploadCallback?: UploadCallbackType;
}
export type ExportData = {
    serializedEditorState: SerializedEditorState;
    htmlContent: string;
    plainContent: string;
};
export type EmailEditorRef = {
    exportData: () => ExportData;
    updateEditorState: (editorState: InitialEditorStateType) => void;
    getEditor: () => LexicalEditor;
};
export interface DocumentEditorProps extends ImageUploadCallback {
    editorState?: InitialEditorStateType;
    historyState?: HistoryState;
    step?: 1 | 2 | 3;
    onChange?: (editorState: EditorState, editor: LexicalEditor, tags: Set<string>) => void;
    autoMentionData?: DataMentionObject[];
    autoAfterMentionData?: DataMentionObject[];
    editorRef?: React.MutableRefObject<LexicalEditor | null | undefined>;
    showTableOfContents?: boolean;
}
declare const DocumentEditor: React.ForwardRefExoticComponent<DocumentEditorProps & React.RefAttributes<EmailEditorRef>>;
export default DocumentEditor;
//# sourceMappingURL=DocumentEditor.d.ts.map