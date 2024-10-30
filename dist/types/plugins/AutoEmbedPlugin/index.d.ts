import { EmbedConfig } from '@lexical/react/LexicalAutoEmbedPlugin';

import * as React from 'react';
interface PlaygroundEmbedConfig extends EmbedConfig {
    contentName: string;
    icon?: JSX.Element;
    exampleUrl: string;
    keywords: Array<string>;
    description?: string;
}
export declare const YoutubeEmbedConfig: PlaygroundEmbedConfig;
export declare const TwitterEmbedConfig: PlaygroundEmbedConfig;
export declare const FigmaEmbedConfig: PlaygroundEmbedConfig;
export declare const EmbedConfigs: PlaygroundEmbedConfig[];
export declare function AutoEmbedDialog({ embedConfig, onClose, }: {
    embedConfig: PlaygroundEmbedConfig;
    onClose: () => void;
}): React.JSX.Element;
export default function AutoEmbedPlugin(): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map