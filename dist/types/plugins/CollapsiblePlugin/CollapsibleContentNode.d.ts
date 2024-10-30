import { DOMConversionMap, DOMConversionOutput, DOMExportOutput, EditorConfig, ElementNode, LexicalNode, SerializedElementNode } from 'lexical';

type SerializedCollapsibleContentNode = SerializedElementNode;
export declare function convertCollapsibleContentElement(_domNode: HTMLElement): DOMConversionOutput | null;
export declare class CollapsibleContentNode extends ElementNode {
    static getType(): string;
    static clone(node: CollapsibleContentNode): CollapsibleContentNode;
    createDOM(_config: EditorConfig): HTMLElement;
    updateDOM(_prevNode: CollapsibleContentNode, _dom: HTMLElement): boolean;
    static importDOM(): DOMConversionMap | null;
    exportDOM(): DOMExportOutput;
    static importJSON(_serializedNode: SerializedCollapsibleContentNode): CollapsibleContentNode;
    isShadowRoot(): boolean;
    exportJSON(): SerializedCollapsibleContentNode;
}
export declare function $createCollapsibleContentNode(): CollapsibleContentNode;
export declare function $isCollapsibleContentNode(node: LexicalNode | null | undefined): node is CollapsibleContentNode;
export {};
//# sourceMappingURL=CollapsibleContentNode.d.ts.map