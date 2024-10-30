
import * as React from 'react';
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