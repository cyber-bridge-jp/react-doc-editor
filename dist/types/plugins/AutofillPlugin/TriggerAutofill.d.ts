import { AutofillStage } from '../../nodes/AutofillNode.ts';
import * as React from 'react';
export type AutofillData = {
    label: string;
    value?: string | number | null;
    isMan?: boolean;
    isNumber?: boolean;
    isInput?: boolean;
};
export type AutofillDataObject = {
    [key: string]: AutofillData;
};
export default function TriggerAutofill({ preData, postData, stage }: {
    stage: AutofillStage;
    preData: AutofillDataObject[];
    postData: AutofillDataObject[];
}): React.JSX.Element | null;
//# sourceMappingURL=TriggerAutofill.d.ts.map