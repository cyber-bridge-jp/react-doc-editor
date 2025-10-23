import {
  $applyNodeReplacement,
  ElementNode,
  NodeKey,
  SerializedElementNode,
  Spread,
} from "lexical";
import './Autofill.css';
import {$isAutofillTokenNode} from "./AutofillTokenNode.ts";

export type AutofillType = 'pre' | 'post' | 'input';
export type AutofillStage = 1 | 2 | 3

export type SerializedAutofillNode = Spread<
  {
    type: "autofill";
    version: 1;
    autofillType: AutofillType;
    label: string;
    fieldName?: string;
    title?: string;
    data?: string | number;
    inputType?: string;
    dataIsSet?: boolean;
  },
  SerializedElementNode
>;

export type AutoFillPayload = {
  autofillType: AutofillType,
  label: string,
  fieldName?: string,
  title?: string,
  data?: string | number,
  inputType?: string,
  stage?: AutofillStage,
  dataIsSet?: boolean
}

export class AutofillNode extends ElementNode {
  __autofillType: AutofillType
  __label: string
  __fieldName?: string
  __title?: string
  __data?: string | number
  __helpText?: string
  __error?: string
  __stage: AutofillStage
  __inputType?: string
  __dataIsSet?: boolean

  constructor(
    autofillType: AutofillType,
    label: string,
    fieldName?: string,
    title?: string,
    data?: string | number,
    inputType?: string,
    stage?: AutofillStage,
    dataIsSet?: boolean,
    key?: NodeKey
  ) {
    super(key);
    this.__autofillType = autofillType;
    this.__label = label;
    this.__fieldName = fieldName;
    this.__title = title;
    this.__data = data;
    this.__inputType = inputType;
    this.__stage = stage || 1;
    this.__dataIsSet = dataIsSet || false;
  }

  static getType(): string {
    return "autofill";
  }

  static clone(node: AutofillNode): AutofillNode {
    return new AutofillNode(
      node.__autofillType,
      node.__label,
      node.__fieldName,
      node.__title,
      node.__data,
      node.__inputType,
      node.__stage,
      node.__dataIsSet,
      node.__key,
    );
  }

  static importJSON(serializedNode: SerializedAutofillNode): AutofillNode {
    const {
      autofillType,
      label,
      fieldName,
      title,
      data,
      inputType,
      dataIsSet,
    } = serializedNode;
    return $createAutofillNode({
      autofillType,
      label,
      fieldName,
      title,
      data,
      inputType,
      dataIsSet,
    })
  }

  createDOM(): HTMLElement {
    const dom = document.createElement("div");
    dom.className = "autofill-node";
    dom.setAttribute('data-lexical-autofill', 'true');
    dom.setAttribute('data-autofill-stage', this.__stage?.toString() || '1');
    dom.setAttribute('data-autofill-type', this.__autofillType);
    if (this.__autofillType === 'input' && this.__label) {
      dom.setAttribute('data-autofill-label', this.__label)
      dom.setAttribute('tabindex', '0')
    }
    if (this.__fieldName) {
      dom.setAttribute('data-autofill-field', this.__fieldName)
    }
    if (this.__inputType) {
      dom.setAttribute('data-autofill-input', this.__inputType);
    }
    return dom;
  }

  updateDOM(prevNode:AutofillNode, dom:HTMLElement): boolean {
    if (this.__stage !== prevNode.__stage) {
      dom.setAttribute('data-autofill-stage', this.__stage?.toString() || '1');
      return true
    }
    return false;
  }

  exportJSON(): SerializedAutofillNode {
    return {
      ...super.exportJSON(),
      type: 'autofill',
      version: 1,
      autofillType: this.__autofillType,
      label: this.__label,
      fieldName: this.__fieldName,
      title: this.__title,
      data: this.__data,
      inputType: this.__inputType,
      dataIsSet: this.__dataIsSet,
    };
  }

  isInline(): true {
    return true;
  }

  canBeEmpty(): boolean {
    return this.getStage() !== 3;
  }

  getLabel(): string {
    const self = this.getLatest()
    return self.__label
  }

  getStage(): AutofillStage {
    const self = this.getLatest()
    return self.__stage
  }

  getAutofillType(): AutofillType {
    const self = this.getLatest()
    return self.__autofillType
  }

  getLabelForText(): string {
    const label = this.getLabel()
    let val = label
    if (this.__stage === 1 && this.__autofillType !== 'input') {
      val = `{{${label}}}`
    } else if (this.__stage === 1 && this.__autofillType === 'input') {
      val = label
    }
    return val
  }

  getData(): string | number | undefined {
    const self = this.getLatest()
    return self.__data
  }

  getDataIsSet(): boolean {
    const self = this.getLatest()
    return self.__dataIsSet || false
  }

  isShadowRoot(): boolean {
    return true;
  }

  setData(value: string | number): this {
    const self = this.getWritable()
    self.__data = value
    if (self.__autofillType === 'pre' && self.getStage() === 2) {
      const firstChild = self.getFirstChild();
      if (firstChild && $isAutofillTokenNode(firstChild)) {
        firstChild.setTextContent(self.__data?.toString() || '')
        self.__dataIsSet = true
      }
    }
    return self
  }

  setLabel(value: string): this {
    const self = this.getWritable()
    self.__label = value
    return self
  }

  setStage(step: AutofillStage): this {
    const self = this.getWritable()
    self.__stage = step
    return self
  }

  setInputTypeFile(title: string) {
    const self = this.getWritable()
    self.__inputType = 'file'
    self.__title = title
    return self
  }

  setDataIsSet(value: boolean): this {
    const self = this.getWritable()
    self.__dataIsSet = value
    return self
  }
}

export function $createAutofillNode(
  {
    autofillType,
    label,
    fieldName,
    title,
    data,
    inputType,
    stage,
    dataIsSet
  }: AutoFillPayload): AutofillNode {
  const node = new AutofillNode(
    autofillType,
    label,
    fieldName,
    title,
    data,
    inputType,
    stage,
    dataIsSet
  );
  return $applyNodeReplacement(node)
}

export function $isAutofillNode(node: unknown): node is AutofillNode {
  return node instanceof AutofillNode;
}