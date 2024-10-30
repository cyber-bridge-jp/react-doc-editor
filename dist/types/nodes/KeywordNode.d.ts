import { EditorConfig, LexicalNode, SerializedTextNode, TextNode } from 'lexical';

export type SerializedKeywordNode = SerializedTextNode;
export declare class KeywordNode extends TextNode {
    static getType(): string;
    static clone(node: KeywordNode): KeywordNode;
    static importJSON(serializedNode: SerializedKeywordNode): KeywordNode;
    exportJSON(): SerializedKeywordNode;
    createDOM(config: EditorConfig): HTMLElement;
    canInsertTextBefore(): boolean;
    canInsertTextAfter(): boolean;
    isTextEntity(): true;
}
export declare function $createKeywordNode(keyword: string): KeywordNode;
export declare function $isKeywordNode(node: LexicalNode | null | undefined): boolean;
//# sourceMappingURL=KeywordNode.d.ts.map