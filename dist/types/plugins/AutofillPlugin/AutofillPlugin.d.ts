import { TextNode } from 'lexical';
import { AutofillNode, AutofillStage, AutofillType, SerializedAutofillNode } from '../../nodes/AutofillNode.ts';
import { AutofillDataObject } from './TriggerAutofill.tsx';

type InsertAutofillCommandProps = {
    label: string;
    autofillType: AutofillType;
    nodeToReplace?: TextNode | null;
    data?: string | number;
    fieldName?: string;
    callback?: (node: AutofillNode) => void;
    isPreInput?: boolean;
};
export declare const INSERT_AUTOFILL: import('lexical').LexicalCommand<InsertAutofillCommandProps>;
interface AutofillPluginProps {
    stage: AutofillStage;
    preData: AutofillDataObject[];
    inputNodes?: SerializedAutofillNode[];
}
export default function AutofillPlugin({ stage, preData, inputNodes }: AutofillPluginProps): null;
export {};
//# sourceMappingURL=AutofillPlugin.d.ts.map