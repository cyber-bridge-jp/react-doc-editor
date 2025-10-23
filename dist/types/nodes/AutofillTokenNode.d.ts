import { EditorConfig, LexicalEditor, LexicalNode, NodeKey, SerializedTextNode, TextNode } from 'lexical';

export declare class AutofillTokenNode extends TextNode {
    constructor(text?: string, key?: NodeKey);
    static getType(): string;
    static clone(node: AutofillTokenNode): AutofillTokenNode;
    static importJSON(serializedNode: SerializedTextNode): AutofillTokenNode;
    createDOM(config: EditorConfig, editor?: LexicalEditor): HTMLElement;
    canInsertTextBefore(): boolean;
    canInsertTextAfter(): boolean;
    isTextEntity(): boolean;
    exportJSON(): SerializedTextNode;
}
export declare function $createAutofillTokenNode(text: string): AutofillTokenNode;
export declare function $isAutofillTokenNode(node: LexicalNode): node is AutofillTokenNode;
//# sourceMappingURL=AutofillTokenNode.d.ts.map