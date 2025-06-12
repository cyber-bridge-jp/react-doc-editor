import { LexicalCommand, LexicalEditor } from 'lexical';
import { default as React } from 'react';
import { ImagePayload } from '../../nodes/ImageNode';
import { ImageUploadCallback } from '../../DocumentEditor.tsx';

export type InsertImagePayload = Readonly<ImagePayload>;
export declare const INSERT_IMAGE_COMMAND: LexicalCommand<InsertImagePayload>;
export declare function InsertImageUriDialogBody({ onClick, }: {
    onClick: (payload: InsertImagePayload) => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function InsertImageUploadedDialogBody({ onClick, imageUploadCallback, }: {
    onClick: (payload: InsertImagePayload) => void;
} & ImageUploadCallback): import("react/jsx-runtime").JSX.Element;
export declare function InsertImageDialog({ activeEditor, onClose, imageUploadCallback, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
} & ImageUploadCallback): React.JSX.Element;
export default function ImagesPlugin({ captionsEnabled, }: {
    captionsEnabled?: boolean;
}): JSX.Element | null;
declare global {
    interface DragEvent {
        rangeOffset?: number;
        rangeParent?: Node;
    }
}
//# sourceMappingURL=index.d.ts.map