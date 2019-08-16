import * as React from 'react';

import * as utils from '../utils';

type Props = {
  children: React.ReactNode;
  component: string | React.ComponentType<any>;
  use?: string | React.ComponentType<any>;
  htmlProps: any;
};

export function createElement({ children, component, htmlProps, use }: Props) {
  if (utils.isFunction(children)) {
    return children(htmlProps);
  }
  return React.createElement(component, { as: use, ...htmlProps }, children);
}
