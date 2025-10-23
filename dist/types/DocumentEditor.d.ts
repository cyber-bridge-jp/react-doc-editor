import { InitialEditorStateType } from '@lexical/react/LexicalComposer';
import { HistoryState } from '@lexical/react/LexicalHistoryPlugin';
import { default as React } from 'react';
import { LexicalEditor, SerializedEditorState } from 'lexical';
import { AutofillDataObject } from './plugins/AutofillPlugin/TriggerAutofill.tsx';
import { AutofillStage } from './nodes/AutofillNode.ts';

export type UploadCallbackType = (file: File, result: string, callback: (url: string) => void) => void;
export interface ImageUploadCallback {
    imageUploadCallback?: UploadCallbackType;
}
export type ExportData = {
    serializedEditorState: SerializedEditorState;
    htmlContent: string;
    plainContent: string;
};
export type ReactDocEditorRef = {
    exportData: () => ExportData;
    updateEditorState: (editorState: InitialEditorStateType) => void;
    getEditor: () => LexicalEditor;
};
export interface DocumentEditorProps extends ImageUploadCallback {
    editorState?: InitialEditorStateType;
    historyState?: HistoryState;
    stage?: AutofillStage;
    onChange?: (data: ExportData) => void;
    autofillPreData?: AutofillDataObject[];
    autofillPostData?: AutofillDataObject[];
    editorRef?: React.MutableRefObject<LexicalEditor | null | undefined>;
    showTableOfContents?: boolean;
}
declare const DocumentEditor: React.ForwardRefExoticComponent<DocumentEditorProps & React.RefAttributes<ReactDocEditorRef>>;
export default DocumentEditor;
//# sourceMappingURL=DocumentEditor.d.ts.map