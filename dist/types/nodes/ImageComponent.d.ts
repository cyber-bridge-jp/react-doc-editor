import { LexicalCommand, LexicalEditor, NodeKey } from 'lexical';
import { default as React } from 'react';

export declare const RIGHT_CLICK_IMAGE_COMMAND: LexicalCommand<MouseEvent>;
export default function ImageComponent({ src, altText, nodeKey, width, height, maxWidth, resizable, showCaption, caption, captionsEnabled, isAbsolute, xOffset, yOffset, }: {
    altText: string;
    caption: LexicalEditor;
    height: 'inherit' | number;
    maxWidth: number;
    nodeKey: NodeKey;
    resizable: boolean;
    showCaption: boolean;
    src: string;
    width: 'inherit' | number;
    captionsEnabled: boolean;
    isAbsolute: boolean;
    xOffset: number;
    yOffset: number;
}): React.JSX.Element;
//# sourceMappingURL=ImageComponent.d.ts.map