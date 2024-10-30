import { default as React } from 'react';
import { LexicalEditor } from 'lexical/LexicalEditor';
import { NodeKey } from 'lexical';

export default function DataMentionComponent({ dataMention, label, value, data, step, nodeKey, error, }: {
    dataMention: 'auto' | 'input' | 'after-auto';
    label: string;
    value?: LexicalEditor;
    data: string | number | null;
    step: 1 | 2 | 3;
    nodeKey: NodeKey;
    error: string | null;
}): React.JSX.Element;
//# sourceMappingURL=DataMentionComponent.d.ts.map