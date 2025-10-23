import {
  $applyNodeReplacement,
  EditorConfig,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  SerializedTextNode,
  TextNode
} from "lexical";

export class AutofillTokenNode extends TextNode {
  constructor(text: string = '', key?: NodeKey) {
    super(text, key);
    this.__mode = 1;
  }

  static getType(): string {
    return 'autofill-token';
  }

  static clone(node: AutofillTokenNode): AutofillTokenNode {
    return new AutofillTokenNode(node.__text, node.__key);
  }

  static importJSON(serializedNode: SerializedTextNode): AutofillTokenNode {
    const node = $createAutofillTokenNode(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }

  createDOM(config: EditorConfig, editor?: LexicalEditor): HTMLElement {
    const dom = super.createDOM(config, editor);
    dom.setAttribute('data-node-key', this.__key);
    return dom;
  }

  canInsertTextBefore(): boolean {
    return false;
  }

  canInsertTextAfter(): boolean {
    return false;
  }

  isTextEntity(): boolean {
    return true
  }

  exportJSON(): SerializedTextNode {
    return {
      ...super.exportJSON(),
      type: this.getType(),
    }
  }
}

export function $createAutofillTokenNode(text: string): AutofillTokenNode {
  const node = new AutofillTokenNode(text);
  return $applyNodeReplacement(node);
}

export function $isAutofillTokenNode(node: LexicalNode): node is AutofillTokenNode {
  return node instanceof AutofillTokenNode;
}

