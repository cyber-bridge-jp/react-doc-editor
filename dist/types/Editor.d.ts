import { DataMentionObject } from './plugins/DataMentionPlugin';
import { ReactDocEditorRef, ExportData, ImageUploadCallback } from './DocumentEditor.tsx';

interface EditorProps extends ImageUploadCallback {
    step: 1 | 2 | 3;
    autoMentionData: DataMentionObject[];
    autoAfterMentionData: DataMentionObject[];
    onChange?: (data: ExportData) => void;
    showTableOfContents?: boolean;
}
declare const Editor: import('react').ForwardRefExoticComponent<EditorProps & import('react').RefAttributes<ReactDocEditorRef>>;
export default Editor;
//# sourceMappingURL=Editor.d.ts.map