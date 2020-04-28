import * as React from 'react';
import _get from 'lodash/get';
import { useDefaultProps } from './useDefaultProps';
import { forwardRefWithUse } from './forwardRefWithUse';

export function createComponent<Props>(
  Component: React.FunctionComponent<Props>,
  config?: {
    attach?: {
      useProps: (props?: Partial<Props>, config?: { themeKey?: string }) => any;
    };
    defaultProps?: Partial<Props>;
    themeKey?: string;
  }
) {
  const ForwardedComponent = forwardRefWithUse<Props, any>((props: Props, ref) => {
    const { props: newProps } = useDefaultProps(props, config);
    // @ts-ignore
    return React.createElement(Component, { ...newProps, elementRef: ref }, _get(props, 'children'));
  });
  return Object.assign({}, ForwardedComponent, config.attach);
}
