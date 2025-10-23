import { Dispatch } from 'react';
import { ImageUploadCallback } from '../../DocumentEditor.tsx';
import { AutofillStage } from '../../nodes/AutofillNode.ts';

export default function ToolbarPlugin({ setIsLinkEditMode, imageUploadCallback, stage }: {
    setIsLinkEditMode: Dispatch<boolean>;
    stage: AutofillStage;
} & ImageUploadCallback): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map