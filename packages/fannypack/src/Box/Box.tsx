import * as React from 'react';
import { Box as ReakitBox, BoxProps as ReakitBoxProps } from 'reakit';
import _get from 'lodash/get';

import { BoxThemeConfig, CSSProperties } from '../types';
import {
  useStyle,
  useClassName,
  omitCSSProps,
  pickHTMLProps,
  mergeRefs,
  createComponent,
  createElement
} from '../utils';

import * as styles from './styles';

export type LocalBoxProps = {
  use?: string | React.ComponentType<any>;
  className?: string;
  children?: React.ReactNode | ((props: BoxProps) => React.ReactNode);
  /* Component-level theme overrides [Read more](TODO) */
  overrides?: BoxThemeConfig;
  showBreakpoint?: string;
  hiddenBreakpoint?: string;
  elementRef?: React.Ref<any>;
};
export type BoxProps = ReakitBoxProps & CSSProperties & LocalBoxProps;

export function useProps(props: BoxProps = {}, refs: Array<any> = []) {
  // Convert CSS props to an object.
  // Example input:
  // props = { color: 'red', backgroundColor: 'blue', isEnabled: true }
  //
  // Example output:
  // style = { color: 'red', backgroundColor: 'blue' }
  const style = useStyle(props);

  // Append the styles from above as a className on the DOM element (with precedence).
  let className = useClassName({
    style: styles.style,
    styleProps: { style, ...props },
    prevClassName: props.className
  });

  // Append the Box styles as a className on the DOM element.
  className = useClassName({ style: styles.Box, styleProps: props, prevClassName: className });

  // Pick out and invalid HTML props & omit the CSS props.
  const htmlProps = omitCSSProps(pickHTMLProps({ ...props, className }));

  if (props.elementRef) {
    htmlProps.ref = mergeRefs(props.elementRef, props.ref, ...refs);
  }

  return { ...htmlProps };
}

export const Box = createComponent<BoxProps>(
  props => {
    const { children, use, ...restProps } = props;
    const boxProps = useProps(restProps);
    return createElement({ children, component: ReakitBox, use, htmlProps: boxProps });
  },
  {
    assign: { useProps },
    themeKey: 'Box'
  }
);
