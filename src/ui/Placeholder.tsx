import './Placeholder.css';

import React from 'react';

export default function Placeholder({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactElement {
  return <div className={className || 'placeholder__root'}>{children}</div>;
}