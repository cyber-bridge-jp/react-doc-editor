import { DataMentionObject } from './plugins/DataMentionPlugin';
import { EditorState, LexicalEditor } from 'lexical';
import { EmailEditorRef, ImageUploadCallback } from './DocumentEditor.tsx';

interface EditorProps extends ImageUploadCallback {
    step: 1 | 2 | 3;
    autoMentionData: DataMentionObject[];
    autoAfterMentionData: DataMentionObject[];
    onChange?: (editorState: EditorState, editor: LexicalEditor, tags: Set<string>) => void;
    showTableOfContents?: boolean;
}
declare const Editor: import('react').ForwardRefExoticComponent<EditorProps & import('react').RefAttributes<EmailEditorRef>>;
export default Editor;
//# sourceMappingURL=Editor.d.ts.map