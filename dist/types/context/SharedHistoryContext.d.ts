import { HistoryState } from '@lexical/react/LexicalHistoryPlugin';
import { ReactNode } from 'react';

import * as React from 'react';
type ContextShape = {
    historyState?: HistoryState;
};
export declare const SharedHistoryContext: ({ children, initHistoryState, }: {
    children: ReactNode;
    initHistoryState?: HistoryState;
}) => React.ReactElement;
export declare const useSharedHistoryContext: () => ContextShape;
export {};
//# sourceMappingURL=SharedHistoryContext.d.ts.map