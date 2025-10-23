import { AutofillDataObject } from './plugins/AutofillPlugin/TriggerAutofill.tsx';
import { ReactDocEditorRef, ExportData, ImageUploadCallback } from './DocumentEditor.tsx';

interface EditorProps extends ImageUploadCallback {
    stage: 1 | 2 | 3;
    autofillPreData: AutofillDataObject[];
    autofillPostData: AutofillDataObject[];
    onChange?: (data: ExportData) => void;
    showTableOfContents?: boolean;
    ignoreSelectionChange?: boolean;
}
declare const Editor: import('react').ForwardRefExoticComponent<EditorProps & import('react').RefAttributes<ReactDocEditorRef>>;
export default Editor;
//# sourceMappingURL=Editor.d.ts.map