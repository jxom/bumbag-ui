import * as React from 'react';

export type BoxProps = {
  children: React.ReactNode;
};

export default function Box(props: BoxProps) {
  const { children } = props;
  return <div>{children}</div>;
}
