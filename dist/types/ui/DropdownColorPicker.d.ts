import { default as React } from 'react';

type Props = {
    disabled?: boolean;
    buttonAriaLabel?: string;
    buttonClassName: string;
    buttonIconClassName?: string;
    buttonLabel?: string;
    title?: string;
    stopCloseOnClickSelf?: boolean;
    color: string;
    onChange?: (color: string, skipHistoryStack: boolean) => void;
};
export default function DropdownColorPicker({ disabled, stopCloseOnClickSelf, color, onChange, ...rest }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=DropdownColorPicker.d.ts.map