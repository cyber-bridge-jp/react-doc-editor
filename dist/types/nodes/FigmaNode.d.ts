import { EditorConfig, ElementFormatType, LexicalEditor, LexicalNode, NodeKey, Spread } from 'lexical';
import { DecoratorBlockNode, SerializedDecoratorBlockNode } from '@lexical/react/LexicalDecoratorBlockNode';

import * as React from 'react';
export type SerializedFigmaNode = Spread<{
    documentID: string;
}, SerializedDecoratorBlockNode>;
export declare class FigmaNode extends DecoratorBlockNode {
    __id: string;
    static getType(): string;
    static clone(node: FigmaNode): FigmaNode;
    static importJSON(serializedNode: SerializedFigmaNode): FigmaNode;
    exportJSON(): SerializedFigmaNode;
    constructor(id: string, format?: ElementFormatType, key?: NodeKey);
    updateDOM(): false;
    getId(): string;
    getTextContent(): string;
    decorate(_editor: LexicalEditor, config: EditorConfig): React.JSX.Element;
}
export declare function $createFigmaNode(documentID: string): FigmaNode;
export declare function $isFigmaNode(node: FigmaNode | LexicalNode | null | undefined): node is FigmaNode;
//# sourceMappingURL=FigmaNode.d.ts.map