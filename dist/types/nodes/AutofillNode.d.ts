import { ElementNode, NodeKey, SerializedElementNode, Spread } from 'lexical';

export type AutofillType = 'pre' | 'post' | 'input';
export type AutofillStage = 1 | 2 | 3;
export type SerializedAutofillNode = Spread<{
    type: "autofill";
    version: 1;
    autofillType: AutofillType;
    label: string;
    fieldName?: string;
    title?: string;
    data?: string | number;
    inputType?: string;
    dataIsSet?: boolean;
    helpText?: string;
}, SerializedElementNode>;
export type AutoFillPayload = {
    autofillType: AutofillType;
    label: string;
    fieldName?: string;
    title?: string;
    data?: string | number;
    inputType?: string;
    stage?: AutofillStage;
    dataIsSet?: boolean;
    helpText?: string;
};
export declare class AutofillNode extends ElementNode {
    __autofillType: AutofillType;
    __label: string;
    __fieldName?: string;
    __title?: string;
    __data?: string | number;
    __helpText?: string;
    __error?: string;
    __stage: AutofillStage;
    __inputType?: string;
    __dataIsSet?: boolean;
    constructor(autofillType: AutofillType, label: string, fieldName?: string, title?: string, data?: string | number, inputType?: string, stage?: AutofillStage, dataIsSet?: boolean, helpText?: string, key?: NodeKey);
    static getType(): string;
    static clone(node: AutofillNode): AutofillNode;
    static importJSON(serializedNode: SerializedAutofillNode): AutofillNode;
    createDOM(): HTMLElement;
    updateDOM(prevNode: AutofillNode, dom: HTMLElement): boolean;
    exportJSON(): SerializedAutofillNode;
    isInline(): true;
    canBeEmpty(): boolean;
    canInsertTextBefore(): boolean;
    canInsertTextAfter(): boolean;
    getLabel(): string;
    getStage(): AutofillStage;
    getAutofillType(): AutofillType;
    getLabelForText(): string;
    getData(): string | number | undefined;
    getDataIsSet(): boolean;
    isShadowRoot(): boolean;
    isFirstChild(): boolean;
    setData(value: string | number): this;
    setLabel(value: string): this;
    setStage(stage: AutofillStage): this;
    setInputTypeFile(title: string): this;
    setHelpText(value: string): this;
    setError(value: string): this;
    setDataIsSet(value: boolean): this;
}
export declare function $createAutofillNode({ autofillType, label, fieldName, title, data, inputType, stage, dataIsSet, helpText }: AutoFillPayload): AutofillNode;
export declare function $isAutofillNode(node: unknown): node is AutofillNode;
//# sourceMappingURL=AutofillNode.d.ts.map