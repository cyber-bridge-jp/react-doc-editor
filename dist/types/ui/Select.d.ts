
import * as React from 'react';
type SelectIntrinsicProps = JSX.IntrinsicElements['select'];
interface SelectProps extends SelectIntrinsicProps {
    label: string;
}
export default function Select({ children, label, className, ...other }: SelectProps): React.JSX.Element;
export {};
//# sourceMappingURL=Select.d.ts.map