import * as React from 'react';

import { isFunction } from './isFunction';

type Props = {
  children?: React.ReactNode;
  component: string | React.ComponentType<any>;
  enableRenderPropsComposition?: boolean;
  use?: string | React.ComponentType<any>;
  htmlProps: any;
};

export function createElement({ children, component, enableRenderPropsComposition = true, htmlProps, use }: Props) {
  if (enableRenderPropsComposition && isFunction(children)) {
    return children(htmlProps);
  }
  return React.createElement(component, { as: use, ...htmlProps }, htmlProps.children || children);
}
