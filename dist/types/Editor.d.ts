import { DataMentionObject } from './plugins/DataMentionPlugin';
import { EditorState, LexicalEditor } from 'lexical';
import * as React from 'react';
interface EditorProps {
    step: 1 | 2 | 3;
    autoMentionData: DataMentionObject[];
    autoAfterMentionData: DataMentionObject[];
    onChange?: (editorState: EditorState, editor: LexicalEditor, tags: Set<string>) => void;
    showTableOfContents?: boolean;
}
export default function Editor(props: EditorProps): React.ReactElement;
export {};
//# sourceMappingURL=Editor.d.ts.map