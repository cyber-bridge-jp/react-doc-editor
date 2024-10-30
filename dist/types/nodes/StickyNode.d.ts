import { EditorConfig, LexicalEditor, LexicalNode, NodeKey, SerializedEditor, SerializedLexicalNode, Spread, DecoratorNode } from 'lexical';

type StickyNoteColor = 'pink' | 'yellow';
export type SerializedStickyNode = Spread<{
    xOffset: number;
    yOffset: number;
    color: StickyNoteColor;
    caption: SerializedEditor;
}, SerializedLexicalNode>;
export declare class StickyNode extends DecoratorNode<JSX.Element> {
    __x: number;
    __y: number;
    __color: StickyNoteColor;
    __caption: LexicalEditor;
    static getType(): string;
    static clone(node: StickyNode): StickyNode;
    static importJSON(serializedNode: SerializedStickyNode): StickyNode;
    constructor(x: number, y: number, color: 'pink' | 'yellow', caption?: LexicalEditor, key?: NodeKey);
    exportJSON(): SerializedStickyNode;
    createDOM(_config: EditorConfig): HTMLElement;
    updateDOM(): false;
    setPosition(x: number, y: number): void;
    toggleColor(): void;
    decorate(_editor: LexicalEditor, _config: EditorConfig): JSX.Element;
    isIsolated(): true;
}
export declare function $isStickyNode(node: LexicalNode | null | undefined): node is StickyNode;
export declare function $createStickyNode(xOffset: number, yOffset: number): StickyNode;
export {};
//# sourceMappingURL=StickyNode.d.ts.map