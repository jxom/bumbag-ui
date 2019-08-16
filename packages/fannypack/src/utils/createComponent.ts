import * as React from 'react';

export function createComponent<P>(
  Component: React.FunctionComponent<P>,
  instances?: {
    useProps: (props?: Partial<P>, refs?: Array<any>) => any;
    defaultProps?: Partial<P>;
  }
) {
  const ForwardedComponent = React.forwardRef((props: P, ref) => {
    return React.createElement(Component, { ...props, elementRef: ref });
  });
  return Object.assign({}, ForwardedComponent, instances);
}
