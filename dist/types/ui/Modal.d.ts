import { ReactNode } from 'react';

import * as React from 'react';
export default function Modal({ onClose, children, title, closeOnClickOutside, }: {
    children: ReactNode;
    closeOnClickOutside?: boolean;
    onClose: () => void;
    title: string;
}): React.JSX.Element;
//# sourceMappingURL=Modal.d.ts.map