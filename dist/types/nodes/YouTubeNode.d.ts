import { DOMConversionMap, DOMExportOutput, EditorConfig, ElementFormatType, LexicalEditor, LexicalNode, NodeKey, Spread } from 'lexical';
import { DecoratorBlockNode, SerializedDecoratorBlockNode } from '@lexical/react/LexicalDecoratorBlockNode';

import * as React from 'react';
export type SerializedYouTubeNode = Spread<{
    videoID: string;
}, SerializedDecoratorBlockNode>;
export declare class YouTubeNode extends DecoratorBlockNode {
    __id: string;
    static getType(): string;
    static clone(node: YouTubeNode): YouTubeNode;
    static importJSON(serializedNode: SerializedYouTubeNode): YouTubeNode;
    exportJSON(): SerializedYouTubeNode;
    constructor(id: string, format?: ElementFormatType, key?: NodeKey);
    exportDOM(): DOMExportOutput;
    static importDOM(): DOMConversionMap | null;
    updateDOM(): false;
    getId(): string;
    getTextContent(_includeInert?: boolean | undefined, _includeDirectionless?: false | undefined): string;
    decorate(_editor: LexicalEditor, config: EditorConfig): React.JSX.Element;
}
export declare function $createYouTubeNode(videoID: string): YouTubeNode;
export declare function $isYouTubeNode(node: YouTubeNode | LexicalNode | null | undefined): node is YouTubeNode;
//# sourceMappingURL=YouTubeNode.d.ts.map