import { LexicalCommand, LexicalEditor } from 'lexical';
import { InlineImagePayload } from '../../nodes/InlineImageNode';
import { ImageUploadCallback } from '../../DocumentEditor.tsx';

export type InsertInlineImagePayload = Readonly<InlineImagePayload>;
export declare const INSERT_INLINE_IMAGE_COMMAND: LexicalCommand<InlineImagePayload>;
export declare function InsertInlineImageDialog({ activeEditor, onClose, imageUploadCallback, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
} & ImageUploadCallback): JSX.Element;
export default function InlineImagePlugin(): JSX.Element | null;
declare global {
    interface DragEvent {
        rangeOffset?: number;
        rangeParent?: Node;
    }
}
//# sourceMappingURL=index.d.ts.map