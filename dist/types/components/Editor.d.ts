import * as React from "react";
import { DataMentionObject } from "../plugins/DataMentionPlugin";
import { EditorState } from "lexical";
interface EditorProps {
    step: 1 | 2 | 3;
    autoMentionData: DataMentionObject[];
    autoAfterMentionData: DataMentionObject[];
    onChange?: (editorState: EditorState) => void;
}
export default function Editor(props: EditorProps): React.ReactElement;
export {};
//# sourceMappingURL=Editor.d.ts.map