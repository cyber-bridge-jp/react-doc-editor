import { LexicalCommand, LexicalEditor } from 'lexical';

import * as React from 'react';
type CommandPayload = {
    equation: string;
    inline: boolean;
};
export declare const INSERT_EQUATION_COMMAND: LexicalCommand<CommandPayload>;
export declare function InsertEquationDialog({ activeEditor, onClose, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
}): JSX.Element;
export default function EquationsPlugin(): React.JSX.Element | null;
export {};
//# sourceMappingURL=index.d.ts.map