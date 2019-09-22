import * as React from 'react';

import { isFunction } from './isFunction';

type Props = {
  children?: React.ReactNode;
  component: string | React.ComponentType<any>;
  use?: string | React.ComponentType<any>;
  htmlProps: any;
};

export function createElement({ children, component, htmlProps, use }: Props) {
  if (isFunction(children)) {
    return children(htmlProps);
  }
  return React.createElement(component, { as: use, ...htmlProps }, htmlProps.children || children);
}
