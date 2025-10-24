import {
  $isTextNode,
  DOMConversionMap, DOMConversionOutput, DOMExportOutput,
  EditorConfig, ElementFormatType,
  ElementNode, isHTMLElement, LexicalEditor, NodeKey, RangeSelection,
  SerializedParagraphNode, setNodeIndentFromDOM,
  Spread, TEXT_TYPE_TO_FORMAT, TextFormatType
} from "lexical";
import {getCachedClassNameArray, toggleTextFormatType} from "../LexicalUtils.tsx";

export type SerializedAutofillParagraphNode = Spread<
  {
    textFormat: number;
    textStyle: string;
  },
  SerializedParagraphNode
>;

export class AutofillParagraphNode extends ElementNode {
  __textFormat: number;
  __textStyle: string;

  constructor(key?: NodeKey) {
    super(key);
    this.__textFormat = 0;
    this.__textStyle = '';
  }

  static getType(): string {
    return 'autofill-paragraph';
  }

  getTextFormat(): number {
    const self = this.getLatest();
    return self.__textFormat;
  }

  setTextFormat(type: number): this {
    const self = this.getWritable();
    self.__textFormat = type;
    return self;
  }

  hasTextFormat(type: TextFormatType): boolean {
    const formatFlag = TEXT_TYPE_TO_FORMAT[type];
    return (this.getTextFormat() & formatFlag) !== 0;
  }

  getFormatFlags(type: TextFormatType, alignWithFormat: null | number): number {
    const self = this.getLatest();
    const format = self.__textFormat;
    return toggleTextFormatType(format, type, alignWithFormat);
  }

  getTextStyle(): string {
    const self = this.getLatest();
    return self.__textStyle;
  }

  setTextStyle(style: string): this {
    const self = this.getWritable();
    self.__textStyle = style;
    return self;
  }

  static clone(node: AutofillParagraphNode): AutofillParagraphNode {
    return new AutofillParagraphNode(node.__key);
  }

  afterCloneFrom(prevNode: this) {
    super.afterCloneFrom(prevNode);
    this.__textFormat = prevNode.__textFormat;
    this.__textStyle = prevNode.__textStyle;
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = document.createElement('p');
    const classNames = getCachedClassNameArray(config.theme, 'paragraph');
    dom.setAttribute('data-lexical-autofill-paragraph', 'true')
    if (classNames !== undefined) {
      const domClassList = dom.classList;
      domClassList.add(...classNames);
    }
    return dom;
  }

  updateDOM(): boolean {
    return false
  }

  static importDOM(): DOMConversionMap | null {
    return {
      p: (domNode: HTMLElement) => {
        if (domNode.getAttribute('data-lexical-autofill-paragraph')) {
          return {
            conversion: $convertAutofillParagraphElement,
            priority: 0,
          }
        }
        return null;
      },
    }
  }

  exportDOM(editor: LexicalEditor): DOMExportOutput {
    const {element} = super.exportDOM(editor);

    if (element && isHTMLElement(element)) {
      if (this.isEmpty()) {
        element.append(document.createElement('br'));
      }

      const formatType = this.getFormatType();
      if (formatType) {
        element.style.textAlign = formatType;
      }
    }

    return {
      element,
    };
  }


  static importJSON(serializedNode: SerializedAutofillParagraphNode): AutofillParagraphNode {
    const node = $createAutofillParagraphNode()
    node.setFormat(serializedNode.format);
    node.setIndent(serializedNode.indent);
    node.setDirection(serializedNode.direction);
    node.setTextFormat(serializedNode.textFormat);
    return node;
  }

  exportJSON(): SerializedAutofillParagraphNode {
    return {
      ...super.exportJSON(),
      textFormat: this.getTextFormat(),
      textStyle: this.getTextStyle(),
      type: 'autofill-paragraph',
      version: 1,
    };
  }

  insertNewAfter(
    rangeSelection: RangeSelection,
    restoreSelection: boolean,
  ): AutofillParagraphNode {
    const newElement = $createAutofillParagraphNode();
    newElement.setTextFormat(rangeSelection.format);
    newElement.setTextStyle(rangeSelection.style);
    const direction = this.getDirection();
    newElement.setDirection(direction);
    newElement.setFormat(this.getFormatType());
    newElement.setStyle(this.getTextStyle());
    this.insertAfter(newElement, restoreSelection);
    return newElement;
  }

  collapseAtStart(): boolean {
    const children = this.getChildren();
    if (
      children.length === 0 ||
      ($isTextNode(children[0]) && children[0].getTextContent().trim() === '')
    ) {
      const nextSibling = this.getNextSibling();
      if (nextSibling !== null) {
        this.selectNext();
        this.remove();
        return true;
      }
      const prevSibling = this.getPreviousSibling();
      if (prevSibling !== null) {
        this.selectPrevious();
        this.remove();
        return true;
      }

      const parent = this.getParent();
      if (parent !== null) {
        this.remove();
        parent.remove();
        return true;
      }
    }
    return false;
  }
}

export function $createAutofillParagraphNode(): AutofillParagraphNode {
  return new AutofillParagraphNode();
}

export function $isAutofillParagraphNode(node: unknown): boolean {
  return node instanceof AutofillParagraphNode;
}

function $convertAutofillParagraphElement(element: HTMLElement): DOMConversionOutput {
  const node = $createAutofillParagraphNode();
  if (element.style) {
    node.setFormat(element.style.textAlign as ElementFormatType);
    setNodeIndentFromDOM(element, node);
  }
  return {node};
}