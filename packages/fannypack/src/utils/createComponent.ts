import * as React from 'react';
import _get from 'lodash-es/get';
import { useDefaultProps } from './useDefaultProps';

export function createComponent<P>(
  Component: React.FunctionComponent<P>,
  config?: {
    attach?: {
      useProps: (props?: Partial<P>, config?: { themeKey?: string }) => any;
    };
    defaultProps?: Partial<P>;
    themeKey?: string;
  }
) {
  const ForwardedComponent = React.forwardRef((props: P, ref) => {
    const { props: newProps } = useDefaultProps(props, config);
    return React.createElement(Component, { ...newProps, elementRef: ref }, _get(props, 'children'));
  });
  return Object.assign({}, ForwardedComponent, config.attach);
}
