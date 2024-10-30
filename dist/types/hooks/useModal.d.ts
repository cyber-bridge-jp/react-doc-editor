import * as React from 'react';
export default function useModal(): [
    React.JSX.Element | null,
    (title: string, showModal: (onClose: () => void) => React.JSX.Element) => void
];
//# sourceMappingURL=useModal.d.ts.map