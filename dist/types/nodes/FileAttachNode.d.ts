import { DOMConversionMap, EditorConfig, ElementNode, LexicalCommand, LexicalNode, NodeKey, SerializedElementNode, Spread } from 'lexical';

export type FileAttachAttributes = {
    rel?: null | string;
    target?: null | string;
    title?: null | string;
};
export type SerializedFileAttachNode = Spread<{
    url: string;
}, Spread<FileAttachAttributes, SerializedElementNode>>;
type FileAttachHTMLElementType = HTMLAnchorElement | HTMLSpanElement;
export declare class FileAttachNode extends ElementNode {
    __url: string;
    __target: null | string;
    __rel: null | string;
    __title: null | string;
    static getType(): string;
    static clone(node: FileAttachNode): FileAttachNode;
    constructor(url: string, attributes?: FileAttachAttributes, key?: NodeKey);
    createDOM(config: EditorConfig): FileAttachHTMLElementType;
    updateDOM(prevNode: FileAttachNode, anchor: FileAttachHTMLElementType, _config: EditorConfig): boolean;
    static importDOM(): DOMConversionMap | null;
    static importJSON(serializedNode: SerializedFileAttachNode): FileAttachNode;
    sanitizeUrl(url: string): string;
    exportJSON(): SerializedFileAttachNode;
    getURL(): string;
    setURL(url: string): void;
    getTarget(): null | string;
    setTarget(target: null | string): void;
    getRel(): null | string;
    setRel(rel: null | string): void;
    getTitle(): null | string;
    setTitle(title: null | string): void;
}
export declare function $createFileAttachNode(url: string, attributes?: FileAttachAttributes): FileAttachNode;
export declare function $isFileAttachNode(node: LexicalNode | null | undefined): node is FileAttachNode;
export declare const TOGGLE_FILE_ATTACH: LexicalCommand<string | {
    url: string;
} & FileAttachAttributes | null>;
export declare function $toggleFileAttach(url: string, attributes?: FileAttachAttributes): void;
export {};
//# sourceMappingURL=FileAttachNode.d.ts.map