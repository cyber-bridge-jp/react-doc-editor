import './ContentEditable.css';

import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import React from 'react';

export default function LexicalContentEditable({
  className,
}: {
  className?: string;
}): React.ReactElement {
  return <ContentEditable className={className || 'content-editable__root'} />;
}