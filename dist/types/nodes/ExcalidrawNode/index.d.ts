import { DOMConversionMap, DOMExportOutput, EditorConfig, LexicalEditor, LexicalNode, NodeKey, SerializedLexicalNode, Spread, DecoratorNode } from 'lexical';

import * as React from 'react';
export type SerializedExcalidrawNode = Spread<{
    data: string;
    width: number | 'inherit';
    height: number | 'inherit';
}, SerializedLexicalNode>;
export declare class ExcalidrawNode extends DecoratorNode<JSX.Element> {
    __data: string;
    __width: number | 'inherit';
    __height: number | 'inherit';
    static getType(): string;
    static clone(node: ExcalidrawNode): ExcalidrawNode;
    static importJSON(serializedNode: SerializedExcalidrawNode): ExcalidrawNode;
    exportJSON(): SerializedExcalidrawNode;
    constructor(data?: string, width?: number | 'inherit', height?: number | 'inherit', key?: NodeKey);
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(): false;
    static importDOM(): DOMConversionMap<HTMLSpanElement> | null;
    exportDOM(editor: LexicalEditor): DOMExportOutput;
    setData(data: string): void;
    setWidth(width: number | 'inherit'): void;
    setHeight(height: number | 'inherit'): void;
    decorate(_editor: LexicalEditor, _config: EditorConfig): React.JSX.Element;
}
export declare function $createExcalidrawNode(): ExcalidrawNode;
export declare function $isExcalidrawNode(node: LexicalNode | null): node is ExcalidrawNode;
//# sourceMappingURL=index.d.ts.map