import { AutofillDataObject } from './plugins/AutofillPlugin/TriggerAutofill.tsx';
import { ReactDocEditorRef, ExportData, ImageUploadCallback } from './DocumentEditor.tsx';
import { AutofillStage, SerializedAutofillNode } from './nodes/AutofillNode.ts';

interface EditorProps extends ImageUploadCallback {
    stage: AutofillStage;
    autofillPreData: AutofillDataObject[];
    autofillPostData: AutofillDataObject[];
    onChange?: (data: ExportData) => void;
    showTableOfContents?: boolean;
    ignoreSelectionChange?: boolean;
    inputNodes?: SerializedAutofillNode[];
}
declare const Editor: import('react').ForwardRefExoticComponent<EditorProps & import('react').RefAttributes<ReactDocEditorRef>>;
export default Editor;
//# sourceMappingURL=Editor.d.ts.map