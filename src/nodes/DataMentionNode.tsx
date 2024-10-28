import {
  $applyNodeReplacement, BaseSelection,
  createEditor,
  DecoratorNode,
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  IS_BOLD,
  IS_CODE,
  IS_HIGHLIGHT,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
  type LexicalNode,
  NodeKey,
  SerializedEditor,
  SerializedLexicalNode,
  Spread,
  TEXT_TYPE_TO_FORMAT,
  TextFormatType,
} from 'lexical'
import {LexicalEditor, TextNodeThemeClasses} from 'lexical/LexicalEditor'
import React, {Suspense} from 'react'
import {getCachedClassNameArray, toggleTextFormatType} from '../LexicalUtils.tsx'
import invariant from '../utils/invariant.ts'
import {DataMentionObject} from '../plugins/DataMentionPlugin'
import {$generateHtmlFromNodes} from '@lexical/html'

const LazyDataMentionComponent = React.lazy(() => import('./DataMentionComponent'))


export type DataMentionType = 'auto' | 'input' | 'after-auto';

export type SerializedDataMentionNode = Spread<{
  dataMention: DataMentionType;
  fieldName: string;
  label: string;
  value?: SerializedEditor;
  data: string | number | null;
  format?: number;
  style?: string;
}, SerializedLexicalNode>

export interface DataMentionPayload {
  dataMention: DataMentionType;
  fieldName: string;
  label: string;
  value?: LexicalEditor;
  data: string | number | null;
  step?: 1 | 2 | 3;
  format?: number;
  style?: string;
}

function convertDataMentionElement(
  domNode: HTMLElement,
): DOMConversionOutput | null {
  const data = domNode.getAttribute('data-mention-data')
  const dataMention = domNode.getAttribute('data-mention-type') as DataMentionType
  const fieldName = domNode.getAttribute('data-mention-field')
  const label = domNode.getAttribute('data-mention-label')
  const step = domNode.getAttribute('data-mention-step')


  if (dataMention !== null && fieldName !== null && label !== null && step !== null) {
    const node = $createDataMentionNode({dataMention, fieldName, label, data, step: parseInt(step) as 1 | 2 | 3})
    return {
      node,
    }
  }

  return null
}

function getElementOuterTag(format: number): string | null {
  if (format & IS_CODE) {
    return 'code'
  }
  if (format & IS_HIGHLIGHT) {
    return 'mark'
  }
  if (format & IS_SUBSCRIPT) {
    return 'sub'
  }
  if (format & IS_SUPERSCRIPT) {
    return 'sup'
  }
  return null
}

function getElementInnerTag(format: number): string {
  if (format & IS_BOLD) {
    return 'strong'
  }
  if (format & IS_ITALIC) {
    return 'em'
  }
  return 'span'
}

function setTextThemeClassNames(
  prevFormat: number,
  nextFormat: number,
  dom: HTMLElement,
  textClassNames: TextNodeThemeClasses,
): void {
  const domClassList = dom.classList
  // Firstly we handle the base theme.
  let classNames = getCachedClassNameArray(textClassNames, 'base')
  if (classNames !== undefined) {
    domClassList.add(...classNames)
  }
  // Secondly we handle the special case: underline + strikethrough.
  // We have to do this as we need a way to compose the fact that
  // the same CSS property will need to be used: text-decoration.
  // In an ideal world we shouldn't have to do this, but there's no
  // easy workaround for many atomic CSS systems today.
  classNames = getCachedClassNameArray(
    textClassNames,
    'underlineStrikethrough',
  )
  let hasUnderlineStrikethrough = false
  const prevUnderlineStrikethrough =
    prevFormat & IS_UNDERLINE && prevFormat & IS_STRIKETHROUGH
  const nextUnderlineStrikethrough =
    nextFormat & IS_UNDERLINE && nextFormat & IS_STRIKETHROUGH

  if (classNames !== undefined) {
    if (nextUnderlineStrikethrough) {
      hasUnderlineStrikethrough = true
      if (!prevUnderlineStrikethrough) {
        domClassList.add(...classNames)
      }
    } else if (prevUnderlineStrikethrough) {
      domClassList.remove(...classNames)
    }
  }

  for (const key in TEXT_TYPE_TO_FORMAT) {
    const flag = TEXT_TYPE_TO_FORMAT[key]
    classNames = getCachedClassNameArray(textClassNames, key)
    if (classNames !== undefined) {
      if (nextFormat & flag) {
        if (
          hasUnderlineStrikethrough &&
          (key === 'underline' || key === 'strikethrough')
        ) {
          if (prevFormat & flag) {
            domClassList.remove(...classNames)
          }
          continue
        }
        if (
          (prevFormat & flag) === 0 ||
          (prevUnderlineStrikethrough && key === 'underline') ||
          key === 'strikethrough'
        ) {
          domClassList.add(...classNames)
        }
      } else if (prevFormat & flag) {
        domClassList.remove(...classNames)
      }
    }
  }
}

function createInnerDOM(
  innerDOM: HTMLElement,
  format: number,
  config: EditorConfig,
): void {
  const theme = config.theme
  // Apply theme class names
  const textClassNames = theme.text

  if (textClassNames !== undefined) {
    setTextThemeClassNames(0, format, innerDOM, textClassNames)
  }
}

const setToOutsideDecorator = (span: HTMLSpanElement) => {
  const parent = span.parentElement
  if (parent) {
    if (parent.hasAttribute('data-lexical-data-mention')) {
      return
    }
    parent.parentElement?.appendChild(span)
  }
}

export class DataMentionNode extends DecoratorNode<React.JSX.Element> {
  __dataMention: DataMentionType
  __fieldName: string
  __label: string
  __value?: LexicalEditor
  __data: string | number | null
  __step: 1 | 2 | 3
  __format: number
  __style: string
  __decoratorSpan: HTMLSpanElement | null
  defaultStep: 1 | 2 | 3 = 1
  autoMentionData: DataMentionObject[] = []
  autoAfterMentionData: DataMentionObject[] = []

  static getType() {
    return 'data-mention'
  }

  static clone(node: DataMentionNode): DataMentionNode {
    return new DataMentionNode(
      node.__dataMention,
      node.__fieldName,
      node.__label,
      node.__data,
      node.__value,
      node.__step,
      node.__format,
      node.__style,
      node.__key,
    )
  }

  constructor(
    dataMention: DataMentionType,
    fieldName: string,
    label: string,
    data: string | number | null,
    value?: LexicalEditor,
    step?: 1 | 2 | 3,
    format?: number,
    style?: string,
    key?: NodeKey,
  ) {
    super(key)
    this.__dataMention = dataMention
    this.__fieldName = fieldName
    this.__label = label
    this.__value = value
    this.__data = data
    this.__step = step || this.defaultStep
    this.__format = format || 0
    this.__style = style || ''
    this.__decoratorSpan = null
  }
  getFormat(): number {
    const self = this.getLatest()
    return self.__format
  }

  getStyle(): string {
    const self = this.getLatest()
    return self.__style
  }

  hasFormat(type: TextFormatType): boolean {
    const formatFlag = TEXT_TYPE_TO_FORMAT[type]
    return (this.getFormat() & formatFlag) !== 0
  }

  getStyleValue(key: string, def: string): string {
    const style = this.getStyle()
    const regex = new RegExp(`${key}:\\s*([^;]+)`)
    const match = style.match(regex)
    return match ? match[1] : def
  }

  canHaveFormat(): boolean {
    return true
  }

  createDOM(config: EditorConfig): HTMLElement {
    const isInput = this.__dataMention === 'input'
    const format = this.__format
    const outerTag = getElementOuterTag(format)
    const innerTag = getElementInnerTag(format)
    const tag = outerTag === null ? innerTag : outerTag
    const dom = document.createElement(isInput ? 'span' : tag)
    const theme = config.theme
    const className = theme.dataMention
    // copy dom
    dom.setAttribute('data-mention-type', this.__dataMention)
    dom.setAttribute('data-mention-step', this.__step.toString())
    dom.setAttribute('data-mention-field', this.__fieldName)
    dom.setAttribute('data-mention-label', this.__label)
    dom.setAttribute('data-lexical-data-mention', 'true')
    dom.setAttribute('data-mention-data', this.__data?.toString() || '')
    if (className !== undefined) {
      dom.className = className
    }
    if (isInput) {
      return dom
    }
    let innerDOM = dom
    if (this.hasFormat('code')) {
      dom.setAttribute('spellcheck', 'false')
    }
    if (outerTag !== null) {
      innerDOM = document.createElement(innerTag)
      dom.appendChild(innerDOM)
    }
    createInnerDOM(innerDOM, format, config)
    const style = this.__style
    if (style !== '') {
      dom.style.cssText = style
    }
    return dom
  }

  updateDOM(
    prevNode: DataMentionNode,
    dom: HTMLElement,
    config: EditorConfig,
  ): boolean {
    if (this.__dataMention === 'input') {
      return false
    }
    const prevFormat = prevNode.__format
    const nextFormat = this.__format
    const prevOuterTag = getElementOuterTag(prevFormat)
    const nextOuterTag = getElementOuterTag(nextFormat)
    const prevInnerTag = getElementInnerTag(prevFormat)
    const nextInnerTag = getElementInnerTag(nextFormat)
    const prevTag = prevOuterTag === null ? prevInnerTag : prevOuterTag
    const nextTag = nextOuterTag === null ? nextInnerTag : nextOuterTag
    const firstChild = dom.firstChild
    let child: ChildNode | null = firstChild !== null ? firstChild.firstChild : null
    if (child && child.nodeType !== Node.TEXT_NODE) {
      dom.appendChild(child)
    } else {
      child = null
    }

    if (prevTag !== nextTag) {
      return true
    }
    if (prevOuterTag === nextOuterTag && prevInnerTag !== nextInnerTag) {
      // should always be an element
      const prevInnerDOM: HTMLElement = dom.firstChild as HTMLElement
      if (prevInnerDOM == null) {
        invariant(false, 'updateDOM: prevInnerDOM is null or undefined')
      }
      const nextInnerDOM = document.createElement(nextInnerTag)
      createInnerDOM(
        nextInnerDOM,
        nextFormat,
        config,
      )
      dom.replaceChild(nextInnerDOM, prevInnerDOM)
      if (child) {
        nextInnerDOM.appendChild(child)
      }
      return false
    }
    let innerDOM = dom
    if (nextOuterTag !== null) {
      if (prevOuterTag !== null) {
        innerDOM = dom.firstChild as HTMLElement
        if (innerDOM == null) {
          invariant(false, 'updateDOM: innerDOM is null or undefined')
        }
      }
    }
    const theme = config.theme
    const className = theme.text
    if (className !== undefined && prevFormat !== nextFormat) {
      setTextThemeClassNames(
        prevFormat,
        nextFormat,
        innerDOM,
        className,
      )
    }
    const prevStyle = prevNode.__style
    const nextStyle = this.__style
    if (prevStyle !== nextStyle) {
      dom.style.cssText = nextStyle
    }

    if (child && innerDOM) {
      innerDOM.appendChild(child)
    }
    return false
  }

  static importDOM(): DOMConversionMap | null {
    return {
      span: (domNode) => {
        if (!domNode.hasAttribute('data-lexical-data-mention')) {
          return null
        }
        return {
          conversion: convertDataMentionElement,
          priority: 1,
        }
      },
    }
  }

  static importJSON(serializedNode: SerializedDataMentionNode): DataMentionNode {
    const {
      dataMention,
      fieldName,
      label,
      data,
      value,
      format,
      style,
    } = serializedNode
    const node = $createDataMentionNode({
      dataMention,
      fieldName,
      label,
      data,
      step: this.prototype.defaultStep,
      format,
      style,

    })
    if (dataMention === 'input' && node.__value) {
      const nestedEditor = node.__value
      if (value) {
        const editorState = nestedEditor.parseEditorState(value.editorState)
        if (!editorState.isEmpty()) {
          nestedEditor.setEditorState(editorState)
        }
      }
    }
    if ((node.__dataMention === 'auto' && node.__step === 2) || (node.__dataMention === 'after-auto' && node.__step === 3)) {
      let data: DataMentionObject | undefined
      if (node.__dataMention === 'auto') {
        data = this.prototype.autoMentionData.find((d) => d[node.__fieldName] && d[node.__fieldName].label === node.__label)
      } else {
        data = this.prototype.autoAfterMentionData.find((d) => d[node.__fieldName] && d[node.__fieldName].label === node.__label)
      }
      if (data) {
        const dataOption = data[node.__fieldName]
        let value = dataOption.value
        if (value && dataOption.isMan) {
          value = parseInt(value.toString()) * 10000
        }
        if (value && dataOption.isNumber) {
          value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        node.setData(value)
      }
    }
    return node
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('span')
    element.setAttribute('data-mention-type', this.__dataMention)
    element.setAttribute('data-mention-step', this.__step.toString())
    element.setAttribute('data-mention-field', this.__fieldName)
    element.setAttribute('data-mention-label', this.__label)
    element.setAttribute('data-lexical-data-mention', 'true')
    if (this.__dataMention === 'input' && this.__value) {
      const value = document.createElement('span')
      const editorState = this.__value.getEditorState()
      editorState.read(() => {
        const parser = new DOMParser()
        const dom = parser.parseFromString(
          $generateHtmlFromNodes(this.__value as LexicalEditor),
          'text/html',
        )
        value.append(...(dom.body.firstChild?.childNodes ?? []))
      })
      element.appendChild(value)
    } else {
      element.innerHTML = this.__data ? this.__data.toString() : ''
    }
    return {element}
  }

  exportJSON(): SerializedDataMentionNode {
    return {
      dataMention: this.__dataMention,
      fieldName: this.__fieldName,
      label: this.__label,
      value: this.__value && this.__value.toJSON(),
      data: this.__data,
      version: 1,
      type: 'data-mention',
      format: this.getFormat(),
      style: this.getStyle(),
    }
  }

  isInput(): boolean {
    return this.__dataMention === 'input'
  }

  setData(data: string | number | null) {
    const writable = this.getWritable()
    writable.__data = data
  }

  setLabel(label: string) {
    const writable = this.getWritable()
    writable.__label = label
  }

  setFormat(format: TextFormatType | number): this {
    if (this.isInput()) {
      return this
    }
    const self = this.getWritable()
    self.__format =
      typeof format === 'string' ? TEXT_TYPE_TO_FORMAT[format] : format
    return self
  }

  setStyle(style: string): this {
    if (this.isInput()) {
      return this
    }
    const self = this.getWritable()
    self.__style = style
    return self
  }

  setSpanRef(span: HTMLSpanElement | null) {
    if (this.__decoratorSpan) return
    const self = this.getWritable()
    self.__decoratorSpan = span
  }

  patchStyle(styles: Record<string, string>): this {
    if (this.isInput()) {
      return this
    }
    let newStyle = this.getStyle()
    for (const key in styles) {
      const value = styles[key]
      const regex = new RegExp(`${key}:\\s*([^;]+)`)
      const match = newStyle.match(regex)
      if (match) {
        newStyle = newStyle.replace(regex, `${key}: ${value}`)
      } else {
        newStyle += `; ${key}: ${value}`
      }
    }
    return this.setStyle(newStyle)
  }

  toggleFormat(type: TextFormatType): this {
    if (this.isInput()) {
      return this
    }
    const format = this.getFormat()
    const newFormat = toggleTextFormatType(format, type, null)
    return this.setFormat(newFormat)
  }

  clearAllFormats() {
    if (this.isInput()) {
      return this
    }
    this.setFormat(0)
    this.setStyle('')
  }

  decorate(): React.JSX.Element {
    return (
      <Suspense fallback={null}>
        <LazyDataMentionComponent
          dataMention={this.__dataMention}
          label={this.__label}
          value={this.__value}
          data={this.__data}
          step={this.__step}
          nodeKey={this.__key}
        />
      </Suspense>
    )
  }

  remove(preserveEmptyParent?: boolean) {
    if (this.__dataMention !== 'input' && this.__decoratorSpan) {
      setToOutsideDecorator(this.__decoratorSpan)
    }
    super.remove(preserveEmptyParent)
  }
}

export const $createDataMentionNode = (
  {
    dataMention,
    fieldName,
    label,
    data,
    value,
    step,
    format,
    style,
  }: DataMentionPayload,
): DataMentionNode => {
  if (!value && dataMention === 'input') {
    value = createEditor()
  }
  const node = new DataMentionNode(dataMention, fieldName, label, data, value, step, format, style)
  return $applyNodeReplacement(node)
}

export const $isDataMentionNode = (node: LexicalNode | null | undefined): node is DataMentionNode => {
  return node instanceof DataMentionNode
}


export const $isDataMentionSelection = (selection: BaseSelection | null): boolean => {
  if (selection === null) {
    return false
  }

  if (selection.getNodes().length !== 1) {
    return false
  }

  return $isDataMentionNode(selection.getNodes()[0])
}