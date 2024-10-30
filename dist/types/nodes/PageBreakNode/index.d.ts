import { DecoratorNode, DOMConversionMap, LexicalNode, SerializedLexicalNode } from 'lexical';
import { default as React } from 'react';

export type SerializedPageBreakNode = SerializedLexicalNode;
export declare class PageBreakNode extends DecoratorNode<JSX.Element> {
    static getType(): string;
    static clone(node: PageBreakNode): PageBreakNode;
    static importJSON(): PageBreakNode;
    static importDOM(): DOMConversionMap | null;
    exportJSON(): SerializedLexicalNode;
    createDOM(): HTMLElement;
    getTextContent(): string;
    isInline(): false;
    updateDOM(): boolean;
    decorate(): React.JSX.Element;
}
export declare function $createPageBreakNode(): PageBreakNode;
export declare function $isPageBreakNode(node: LexicalNode | null | undefined): node is PageBreakNode;
//# sourceMappingURL=index.d.ts.map