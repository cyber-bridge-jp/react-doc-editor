import { LexicalCommand, LexicalEditor } from 'lexical';

import * as React from 'react';
export declare const INSERT_POLL_COMMAND: LexicalCommand<string>;
export declare function InsertPollDialog({ activeEditor, onClose, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
}): React.JSX.Element;
export default function PollPlugin(): JSX.Element | null;
//# sourceMappingURL=index.d.ts.map