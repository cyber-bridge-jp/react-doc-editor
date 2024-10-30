import { DOMConversionMap, EditorConfig, LexicalNode, NodeKey, SerializedElementNode, Spread, ElementNode } from 'lexical';

export type SerializedLayoutContainerNode = Spread<{
    templateColumns: string;
}, SerializedElementNode>;
export declare class LayoutContainerNode extends ElementNode {
    __templateColumns: string;
    constructor(templateColumns: string, key?: NodeKey);
    static getType(): string;
    static clone(node: LayoutContainerNode): LayoutContainerNode;
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(prevNode: LayoutContainerNode, dom: HTMLElement): boolean;
    static importDOM(): DOMConversionMap | null;
    static importJSON(json: SerializedLayoutContainerNode): LayoutContainerNode;
    canBeEmpty(): boolean;
    exportJSON(): SerializedLayoutContainerNode;
    getTemplateColumns(): string;
    setTemplateColumns(templateColumns: string): void;
}
export declare function $createLayoutContainerNode(templateColumns: string): LayoutContainerNode;
export declare function $isLayoutContainerNode(node: LexicalNode | null | undefined): node is LayoutContainerNode;
//# sourceMappingURL=LayoutContainerNode.d.ts.map