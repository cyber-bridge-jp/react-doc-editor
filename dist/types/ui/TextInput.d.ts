import { default as React, HTMLInputTypeAttribute } from 'react';

type Props = Readonly<{
    'data-test-id'?: string;
    label: string;
    onChange: (val: string) => void;
    placeholder?: string;
    value: string;
    type?: HTMLInputTypeAttribute;
}>;
export default function TextInput({ label, value, onChange, placeholder, 'data-test-id': dataTestId, type, }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=TextInput.d.ts.map