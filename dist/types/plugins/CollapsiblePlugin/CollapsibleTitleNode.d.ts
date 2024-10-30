import { DOMConversionMap, DOMConversionOutput, DOMExportOutput, EditorConfig, ElementNode, LexicalEditor, LexicalNode, RangeSelection, SerializedElementNode } from 'lexical';

type SerializedCollapsibleTitleNode = SerializedElementNode;
export declare function convertSummaryElement(_domNode: HTMLElement): DOMConversionOutput | null;
export declare class CollapsibleTitleNode extends ElementNode {
    static getType(): string;
    static clone(node: CollapsibleTitleNode): CollapsibleTitleNode;
    createDOM(_config: EditorConfig, _editor: LexicalEditor): HTMLElement;
    updateDOM(_prevNode: CollapsibleTitleNode, _dom: HTMLElement): boolean;
    static importDOM(): DOMConversionMap | null;
    static importJSON(_serializedNode: SerializedCollapsibleTitleNode): CollapsibleTitleNode;
    exportDOM(): DOMExportOutput;
    exportJSON(): SerializedCollapsibleTitleNode;
    collapseAtStart(_selection: RangeSelection): boolean;
    insertNewAfter(_: RangeSelection, restoreSelection?: boolean): ElementNode;
}
export declare function $createCollapsibleTitleNode(): CollapsibleTitleNode;
export declare function $isCollapsibleTitleNode(node: LexicalNode | null | undefined): node is CollapsibleTitleNode;
export {};
//# sourceMappingURL=CollapsibleTitleNode.d.ts.map