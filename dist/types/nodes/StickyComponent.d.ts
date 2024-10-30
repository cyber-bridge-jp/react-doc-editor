import { LexicalEditor, NodeKey } from 'lexical';

import * as React from 'react';
export type Positioning = {
    isDragging: boolean;
    offsetX: number;
    offsetY: number;
    rootElementRect: null | ClientRect;
    x: number;
    y: number;
};
export declare function positionSticky(stickyElem: HTMLElement, positioning: Positioning): void;
export default function StickyComponent({ x, y, nodeKey, color, caption, }: {
    caption: LexicalEditor;
    color: 'pink' | 'yellow';
    nodeKey: NodeKey;
    x: number;
    y: number;
}): React.JSX.Element;
//# sourceMappingURL=StickyComponent.d.ts.map