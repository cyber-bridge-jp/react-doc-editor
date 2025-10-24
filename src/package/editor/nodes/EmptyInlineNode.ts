import {ElementNode, SerializedElementNode} from "lexical";

export class EmptyInlineNode extends ElementNode {
  static getType(): string {
    return 'empty-inline';
  }

  static clone(node: EmptyInlineNode): EmptyInlineNode {
    return new EmptyInlineNode(node.__key);
  }

  static importJSON(): EmptyInlineNode {
    return $createEmptyInlineNode();
  }

  createDOM(): HTMLElement {
    const dom = document.createElement('span');
    dom.setAttribute('data-lexical-empty-inline', 'true');
    return dom;
  }

  updateDOM(): boolean {
    return false
  }

  exportJSON(): SerializedElementNode {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: 1,
    };
  }

  isInline(): true {
    return true;
  }

  canBeEmpty(): boolean {
    return true
  }

  canInsertTextBefore(): boolean {
    return true
  }

  canInsertTextAfter(): boolean {
    return true
  }
}

export function $createEmptyInlineNode(): EmptyInlineNode {
  return new EmptyInlineNode();
}

export function $isEmptyInlineNode(node: unknown): boolean {
  return node instanceof EmptyInlineNode;
}
