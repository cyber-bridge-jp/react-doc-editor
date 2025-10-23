import { ElementNode, LexicalNode, RangeSelection } from 'lexical';
import { LinkAttributes, LinkNode, SerializedAutoLinkNode, SerializedLinkNode } from '@lexical/link';

export declare class FileAttachNode extends LinkNode {
    static getType(): string;
    static clone(node: FileAttachNode): FileAttachNode;
    static importJSON(serializedNode: SerializedLinkNode): LinkNode;
    insertNewAfter(_: RangeSelection, restoreSelection?: boolean): ElementNode | null;
    exportJSON(): SerializedLinkNode | SerializedAutoLinkNode;
}
export declare function $createFileAttachNode(url: string, attributes?: LinkAttributes): FileAttachNode;
export declare function $isFileAttachNode(node: LexicalNode | null | undefined): node is FileAttachNode;
//# sourceMappingURL=FileAttachNode.d.ts.map