import {
  $applyNodeReplacement, ElementNode,
  LexicalNode, RangeSelection,
} from 'lexical'
import {LinkAttributes, LinkNode, SerializedAutoLinkNode, SerializedLinkNode} from "@lexical/link";

export class FileAttachNode extends LinkNode {

  static getType(): string {
    return 'file-attach';
  }

  static clone(node: FileAttachNode): FileAttachNode {
    return new FileAttachNode(node.__url, {target: node.__target, title: node.__title, rel: node.__rel}, node.__key);
  }
  static importJSON(serializedNode: SerializedLinkNode): LinkNode {
    return $createFileAttachNode(serializedNode.url, {target: serializedNode.target, title: serializedNode.title, rel: serializedNode.rel});
  }

  insertNewAfter(_: RangeSelection, restoreSelection?: boolean): ElementNode | null {
    const fileAttachNode = $createFileAttachNode(this.__url, {
      rel: this.__rel,
      target: this.__target,
      title: this.__title,
    });
    this.insertAfter(fileAttachNode, restoreSelection);
    return fileAttachNode;
  }

  exportJSON(): SerializedLinkNode | SerializedAutoLinkNode {
    return {
      ...super.exportJSON(),
      type: FileAttachNode.getType(),
      version: 1,
    }
  }
}

export function $createFileAttachNode(
  url: string,
  attributes?: LinkAttributes,
): FileAttachNode {
  return $applyNodeReplacement(new FileAttachNode(url, attributes));
}

export function $isFileAttachNode(
  node: LexicalNode | null | undefined,
): node is FileAttachNode {
  return node instanceof FileAttachNode;
}
