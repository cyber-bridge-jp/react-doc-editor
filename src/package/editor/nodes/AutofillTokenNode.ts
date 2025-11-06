import {
  $applyNodeReplacement,
  EditorConfig,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  SerializedTextNode,
  TextNode
} from "lexical";
import {$isAutofillNode} from "./AutofillNode.ts";

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
    const parent = this.getParents().find((node) => $isAutofillNode(node));
    if (parent && parent.__autofillType !== 'input' && !parent.__data && !parent.__isPreInput) {
      const label = `{{${parent.__label}}}`
      if (this.__text === label) {
        editor?.update(() => {
          this.setTextContent(`{{${parent.__fieldName}}}`)
        })
      }
    }
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

