import { DOMConversionMap, DOMExportOutput, EditorConfig, ElementNode, NodeKey, RangeSelection, SerializedParagraphNode, Spread, TextFormatType } from 'lexical';

export type SerializedAutofillParagraphNode = Spread<{
    textFormat: number;
    textStyle: string;
}, SerializedParagraphNode>;
export declare class AutofillParagraphNode extends ElementNode {
    __textFormat: number;
    __textStyle: string;
    constructor(key?: NodeKey);
    static getType(): string;
    getTextFormat(): number;
    setTextFormat(type: number): this;
    hasTextFormat(type: TextFormatType): boolean;
    getFormatFlags(type: TextFormatType, alignWithFormat: null | number): number;
    getTextStyle(): string;
    setTextStyle(style: string): this;
    static clone(node: AutofillParagraphNode): AutofillParagraphNode;
    afterCloneFrom(prevNode: this): void;
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(): boolean;
    static importDOM(): DOMConversionMap | null;
    exportDOM(): DOMExportOutput;
    static importJSON(serializedNode: SerializedAutofillParagraphNode): AutofillParagraphNode;
    exportJSON(): SerializedAutofillParagraphNode;
    insertNewAfter(rangeSelection: RangeSelection, restoreSelection: boolean): AutofillParagraphNode;
    collapseAtStart(): boolean;
}
export declare function $createAutofillParagraphNode(): AutofillParagraphNode;
export declare function $isAutofillParagraphNode(node: unknown): boolean;
//# sourceMappingURL=AutofillParagraphNode.d.ts.map