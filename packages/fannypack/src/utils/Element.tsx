import * as React from 'react';

import * as utils from '../utils';

type Props = {
  children: React.ReactNode;
  component: string | React.ComponentType<any>;
  use?: string | React.ComponentType<any>;
  htmlProps: any;
};

export function Element({ children, component: Component, use, htmlProps }: Props) {
  if (utils.isFunction(children)) {
    return <React.Fragment>{children(htmlProps)}</React.Fragment>;
  }
  return (
    <Component as={use} {...htmlProps}>
      {children}
    </Component>
  );
}
