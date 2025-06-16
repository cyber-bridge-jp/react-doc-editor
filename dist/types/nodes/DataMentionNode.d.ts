import { BaseSelection, DecoratorNode, DOMConversionMap, DOMExportOutput, EditorConfig, LexicalNode, NodeKey, SerializedEditor, SerializedLexicalNode, Spread, TextFormatType } from 'lexical';
import { LexicalEditor } from 'lexical/LexicalEditor';
import { default as React } from 'react';

export type DataMentionType = 'auto' | 'input' | 'after-auto';
export type SerializedDataMentionNode = Spread<{
    dataMention: DataMentionType;
    fieldName: string;
    label: string;
    value?: SerializedEditor;
    data: string | number | null;
    format?: number;
    style?: string;
}, SerializedLexicalNode>;
export interface DataMentionPayload {
    dataMention: DataMentionType;
    fieldName: string;
    label: string;
    value?: LexicalEditor;
    data: string | number | null;
    step?: 1 | 2 | 3;
    format?: number;
    style?: string;
}
export declare class DataMentionNode extends DecoratorNode<React.JSX.Element> {
    __dataMention: DataMentionType;
    __fieldName: string;
    __label: string;
    __value?: LexicalEditor;
    __data: string | number | null;
    __step: 1 | 2 | 3;
    __format: number;
    __style: string;
    __decoratorSpan: HTMLSpanElement | null;
    __inputError: string | null;
    defaultStep: 1 | 2 | 3;
    static getType(): string;
    static clone(node: DataMentionNode): DataMentionNode;
    constructor(dataMention: DataMentionType, fieldName: string, label: string, data: string | number | null, value?: LexicalEditor, step?: 1 | 2 | 3, format?: number, style?: string, inputError?: string | null, key?: NodeKey);
    getDataMention(): DataMentionType;
    getFieldName(): string;
    getLabel(): string;
    getValue(): LexicalEditor | undefined;
    getData(): string | number | null;
    getFormat(): number;
    getStyle(): string;
    hasFormat(type: TextFormatType): boolean;
    getStyleValue(key: string, def: string): string;
    canHaveFormat(): boolean;
    isInput(): boolean;
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(prevNode: DataMentionNode, dom: HTMLElement, config: EditorConfig): boolean;
    static importDOM(): DOMConversionMap | null;
    static importJSON(serializedNode: SerializedDataMentionNode): DataMentionNode;
    exportDOM(editor: LexicalEditor): DOMExportOutput;
    exportJSON(): SerializedDataMentionNode;
    setData(data: string | number | null): this;
    setLabel(label: string): this;
    setValue(value: LexicalEditor): this;
    setFormat(format: TextFormatType | number): this;
    setStyle(style: string): this;
    setSpanRef(span: HTMLSpanElement | null): void;
    setError(error: string | null): void;
    patchStyle(styles: Record<string, string>): this;
    toggleFormat(type: TextFormatType): this;
    clearAllFormats(): this | undefined;
    decorate(): React.JSX.Element;
    remove(preserveEmptyParent?: boolean): void;
}
export declare const $createDataMentionNode: ({ dataMention, fieldName, label, data, value, step, format, style, }: DataMentionPayload) => DataMentionNode;
export declare const $isDataMentionNode: (node: LexicalNode | null | undefined) => node is DataMentionNode;
export declare const $isDataMentionSelection: (selection: BaseSelection | null) => boolean;
//# sourceMappingURL=DataMentionNode.d.ts.map