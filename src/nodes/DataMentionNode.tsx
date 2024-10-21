import {
    $applyNodeReplacement,
    createEditor,
    DecoratorNode,
    DOMConversionMap,
    DOMConversionOutput,
    DOMExportOutput,
    EditorConfig,
    type LexicalNode,
    NodeKey,
    SerializedEditor,
    SerializedLexicalNode,
    Spread,
} from 'lexical'
import {LexicalEditor} from "lexical/LexicalEditor";
import React, {Suspense} from "react";

const LazyDataMentionComponent = React.lazy(() => import('./DataMentionComponent'));


export type DataMentionType = 'auto' | 'input' | 'after-auto';

export type SerializedDataMentionNode = Spread<{
    dataMention: DataMentionType;
    fieldName: string;
    label: string;
    value?: SerializedEditor;
    data: string | number | null;
}, SerializedLexicalNode>

export interface DataMentionPayload {
    dataMention: DataMentionType;
    fieldName: string;
    label: string;
    value?: LexicalEditor;
    data: string | number | null;
    step?: 1 | 2 | 3;
}

function convertDataMentionElement(
    domNode: HTMLElement,
): DOMConversionOutput | null {
    const data = domNode.getAttribute('data-mention-data');
    const dataMention = domNode.getAttribute('data-mention-type') as DataMentionType;
    const fieldName = domNode.getAttribute('data-mention-field');
    const label = domNode.getAttribute('data-mention-label');
    const step = domNode.getAttribute('data-mention-step');


    if (dataMention !== null && fieldName !== null && label !== null && step !== null) {
        const node = $createDataMentionNode({dataMention, fieldName, label, data, step: parseInt(step) as 1 | 2 | 3});
        return {
            node,
        };
    }

    return null;
}

export class DataMentionNode extends DecoratorNode<React.JSX.Element> {
    __dataMention: DataMentionType;
    __fieldName: string;
    __label: string;
    __value?: LexicalEditor;
    __data: string | number | null;
    __step: 1 | 2 | 3;
    defaultStep: 1 | 2 | 3 = 1;

    constructor(
        dataMention: DataMentionType,
        fieldName: string,
        label: string,
        data: string | number | null,
        value?: LexicalEditor,
        step?: 1 | 2 | 3,
        key?: NodeKey,
    ) {
        super(key);
        this.__dataMention = dataMention;
        this.__fieldName = fieldName;
        this.__label = label;
        this.__value = value;
        this.__data = data;
        this.__step = step || this.defaultStep;
    }

    static getType() {
        return 'data-mention';
    }

    static clone(node: DataMentionNode): DataMentionNode {
        return new DataMentionNode(
            node.__dataMention,
            node.__fieldName,
            node.__label,
            node.__data,
            node.__value,
            node.__step,
            node.__key,
        );
    }

    static importJSON(serializedNode: SerializedDataMentionNode): DataMentionNode {
        const {
            dataMention,
            fieldName,
            label,
            data,
            value,
        } = serializedNode;
        const node = $createDataMentionNode({dataMention, fieldName, label, data, step: this.prototype.defaultStep});
        if (dataMention === 'input' && node.__value) {
            const nestedEditor = node.__value;
            if (value) {
                const editorState = nestedEditor.parseEditorState(value.editorState);
                if (!editorState.isEmpty()) {
                    nestedEditor.setEditorState(editorState);
                }
            }
        }
        return node;
    }

    exportDOM(): DOMExportOutput {
        const element = document.createElement('span');
        element.setAttribute('data-mention-type', this.__dataMention);
        element.setAttribute('data-mention-step', this.__step.toString());
        element.setAttribute('data-mention-field', this.__fieldName);
        element.setAttribute('data-mention-label', this.__label);
        element.setAttribute('data-lexical-data-mention', 'true');
        element.setAttribute('data-mention-data', this.__data?.toString() || '');
        return {element};
    }

    updateDOM(): false {
        return false;
    }

    static importDOM(): DOMConversionMap | null {
        return {
            span: (domNode) => {
                if (!domNode.hasAttribute('data-lexical-data-mention')) {
                    return null;
                }
                return {
                    conversion: convertDataMentionElement,
                    priority: 1,
                };
            },
        };
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
        };
    }

    createDOM(config: EditorConfig): HTMLElement {
        const span = document.createElement('span');
        span.setAttribute('data-mention-type', this.__dataMention);
        span.setAttribute('data-mention-step', this.__step.toString());
        span.setAttribute('data-mention-field', this.__fieldName);
        span.setAttribute('data-mention-label', this.__label);
        span.setAttribute('data-lexical-data-mention', 'true');
        span.setAttribute('data-mention-data', this.__data?.toString() || '');
        const theme = config.theme;
        const className = theme.dataMention;
        if (className !== undefined) {
            span.className = className;
        }
        return span;
    }

    setData(data: string | number | null) {
        const writable = this.getWritable();
        writable.__data = data;
    }

    setLabel(label: string) {
        const writable = this.getWritable();
        writable.__label = label;
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
                />
            </Suspense>
        )
    }

}

export const $createDataMentionNode = ({dataMention, fieldName, label, data, value, step}: DataMentionPayload): DataMentionNode => {
    if (!value && dataMention === 'input') {
        value = createEditor();
    }
    const node = new DataMentionNode(dataMention, fieldName, label, data, value, step);
    return $applyNodeReplacement(node);
}

export const $isDataMentionNode = (node: LexicalNode | null | undefined): node is DataMentionNode => {
    return node instanceof DataMentionNode;
}