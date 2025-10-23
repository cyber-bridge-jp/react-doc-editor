import { TextNode } from 'lexical';
import { AutofillNode, AutofillStage, AutofillType } from '../../nodes/AutofillNode.ts';
import { AutofillDataObject } from './TriggerAutofill.tsx';

type InsertAutofillCommandProps = {
    label: string;
    autofillType: AutofillType;
    nodeToReplace?: TextNode | null;
    data?: string | number;
    fieldName?: string;
    callback?: (node: AutofillNode) => void;
};
export declare const INSERT_AUTOFILL: import('lexical').LexicalCommand<InsertAutofillCommandProps>;
interface AutofillPluginProps {
    stage: AutofillStage;
    preData: AutofillDataObject[];
}
export default function AutofillPlugin({ stage, preData }: AutofillPluginProps): null;
export {};
//# sourceMappingURL=AutofillPlugin.d.ts.map