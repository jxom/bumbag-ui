import * as React from 'react';
import { useDefaultProps } from './useDefaultProps';

export function createComponent<Props>(
  Component: React.FunctionComponent<Props>,
  config?: {
    attach?: {
      displayName?: string;
      useProps: (props?: Partial<Props>, config?: { disableCSSProps?: Array<string>; themeKey?: string }) => any;
    };
    defaultProps?: Partial<Props>;
    themeKey?: string;
    shouldMemo?: boolean;
  }
) {
  const Comp = (props: Props, ref) => {
    const { props: newProps } = useDefaultProps(props, config);
    // @ts-ignore
    return React.createElement(Component, { ...newProps, elementRef: ref }, props?.children);
  };
  let ForwardedComponent = React.forwardRef(Comp);
  if (config.shouldMemo) {
    ForwardedComponent = React.memo(ForwardedComponent);
  }
  return Object.assign(ForwardedComponent, config.attach);
}
