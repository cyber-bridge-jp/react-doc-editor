
import * as React from 'react';
export declare const UPDATE_AUTO_DATA_COMMAND: import('lexical').LexicalCommand<unknown>;
export type DataMentionData = {
    label: string;
    value: string | number | null;
    isMan?: boolean;
    isNumber?: boolean;
};
export type DataMentionObject = {
    [key: string]: DataMentionData;
};
export default function DataMentionPlugin({ step, autoData, afterAutoData, }: {
    step: 1 | 2 | 3;
    autoData: DataMentionObject[];
    afterAutoData: DataMentionObject[];
}): React.JSX.Element | null;
//# sourceMappingURL=index.d.ts.map