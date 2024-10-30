import { DOMConversionMap, DOMExportOutput, EditorConfig, LexicalEditor, LexicalNode, NodeKey, SerializedEditor, SerializedLexicalNode, Spread, DecoratorNode } from 'lexical';

import * as React from 'react';
export interface ImagePayload {
    altText: string;
    caption?: LexicalEditor;
    height?: number;
    key?: NodeKey;
    maxWidth?: number;
    showCaption?: boolean;
    src: string;
    width?: number;
    captionsEnabled?: boolean;
    xOffset?: number;
    yOffset?: number;
    isAbsolute?: boolean;
}
export type SerializedImageNode = Spread<{
    altText: string;
    caption: SerializedEditor;
    height?: number;
    maxWidth: number;
    showCaption: boolean;
    src: string;
    width?: number;
    isAbsolute?: boolean;
    xOffset?: number;
    yOffset?: number;
}, SerializedLexicalNode>;
export declare class ImageNode extends DecoratorNode<React.JSX.Element> {
    __src: string;
    __altText: string;
    __width: 'inherit' | number;
    __height: 'inherit' | number;
    __maxWidth: number;
    __showCaption: boolean;
    __caption: LexicalEditor;
    __captionsEnabled: boolean;
    __isAbsolute: boolean;
    __x: number;
    __y: number;
    static getType(): string;
    static clone(node: ImageNode): ImageNode;
    static importJSON(serializedNode: SerializedImageNode): ImageNode;
    exportDOM(): DOMExportOutput;
    static importDOM(): DOMConversionMap | null;
    constructor(src: string, altText: string, maxWidth: number, width?: 'inherit' | number, height?: 'inherit' | number, showCaption?: boolean, caption?: LexicalEditor, captionsEnabled?: boolean, key?: NodeKey, isAbsolute?: boolean, x?: number, y?: number);
    exportJSON(): SerializedImageNode;
    setWidthAndHeight(width: 'inherit' | number, height: 'inherit' | number): void;
    setShowCaption(showCaption: boolean): void;
    setAbsolute(isAbsolute: boolean): void;
    setPosition(x: number, y: number): void;
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(): false;
    getSrc(): string;
    getAltText(): string;
    decorate(): React.JSX.Element;
}
export declare function $createImageNode({ altText, height, maxWidth, captionsEnabled, src, width, showCaption, caption, key, xOffset, yOffset, isAbsolute, }: ImagePayload): ImageNode;
export declare function $isImageNode(node: LexicalNode | null | undefined): node is ImageNode;
//# sourceMappingURL=ImageNode.d.ts.map