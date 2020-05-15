import * as React from 'react';
import _get from 'lodash/get';
import { useDefaultProps } from './useDefaultProps';
import { ComponentWithUse } from './forwardRefWithUse';

export function createComponent<Props>(
  Component: React.FunctionComponent<Props>,
  config?: {
    attach?: {
      useProps: (props?: Partial<Props>, config?: { themeKey?: string }) => any;
    };
    defaultProps?: Partial<Props>;
    themeKey?: string;
    shouldMemo?: boolean;
  }
) {
  const Comp = (props: Props, ref) => {
    const { props: newProps } = useDefaultProps(props, config);
    // @ts-ignore
    return React.createElement(Component, { ...newProps, elementRef: ref }, _get(props, 'children'));
  };
  let ForwardedComponent = React.forwardRef(Comp);
  if (config.shouldMemo) {
    ForwardedComponent = React.memo(ForwardedComponent);
  }
  return Object.assign(ForwardedComponent, config.attach);
}
