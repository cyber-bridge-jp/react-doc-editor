import { ElementNode, SerializedElementNode } from 'lexical';

export declare class EmptyInlineNode extends ElementNode {
    static getType(): string;
    static clone(node: EmptyInlineNode): EmptyInlineNode;
    static importJSON(): EmptyInlineNode;
    createDOM(): HTMLElement;
    updateDOM(): boolean;
    exportJSON(): SerializedElementNode;
    isInline(): true;
    canBeEmpty(): boolean;
    canInsertTextBefore(): boolean;
    canInsertTextAfter(): boolean;
}
export declare function $createEmptyInlineNode(): EmptyInlineNode;
export declare function $isEmptyInlineNode(node: unknown): boolean;
//# sourceMappingURL=EmptyInlineNode.d.ts.map