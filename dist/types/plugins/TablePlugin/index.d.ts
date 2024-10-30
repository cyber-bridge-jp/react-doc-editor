import { EditorThemeClasses, Klass, LexicalCommand, LexicalEditor, LexicalNode } from 'lexical';

import * as React from 'react';
export type InsertTableCommandPayload = Readonly<{
    columns: string;
    rows: string;
    includeHeaders?: boolean;
}>;
export type CellContextShape = {
    cellEditorConfig: null | CellEditorConfig;
    cellEditorPlugins: null | JSX.Element | Array<JSX.Element>;
    set: (cellEditorConfig: null | CellEditorConfig, cellEditorPlugins: null | JSX.Element | Array<JSX.Element>) => void;
};
export type CellEditorConfig = Readonly<{
    namespace: string;
    nodes?: ReadonlyArray<Klass<LexicalNode>>;
    onError: (error: Error, editor: LexicalEditor) => void;
    readOnly?: boolean;
    theme?: EditorThemeClasses;
}>;
export declare const INSERT_NEW_TABLE_COMMAND: LexicalCommand<InsertTableCommandPayload>;
export declare const CellContext: React.Context<CellContextShape>;
export declare function TableContext({ children }: {
    children: React.JSX.Element;
}): import("react/jsx-runtime").JSX.Element;
export declare function InsertTableDialog({ activeEditor, onClose, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
}): React.JSX.Element;
export declare function TablePlugin({ cellEditorConfig, children, }: {
    cellEditorConfig: CellEditorConfig;
    children: JSX.Element | Array<JSX.Element>;
}): JSX.Element | null;
//# sourceMappingURL=index.d.ts.map