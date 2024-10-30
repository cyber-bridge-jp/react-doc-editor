import { LexicalCommand, NodeKey } from 'lexical';

export declare const INSERT_LAYOUT_COMMAND: LexicalCommand<string>;
export declare const UPDATE_LAYOUT_COMMAND: LexicalCommand<{
    template: string;
    nodeKey: NodeKey;
}>;
export declare function LayoutPlugin(): null;
//# sourceMappingURL=LayoutPlugin.d.ts.map