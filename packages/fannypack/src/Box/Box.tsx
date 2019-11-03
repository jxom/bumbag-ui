import * as React from 'react';
import { Box as ReakitBox, BoxProps as ReakitBoxProps } from 'reakit';
import _get from 'lodash/get';

import { ThemeConfig, CSSProperties } from '../types';
import {
  useStyle,
  useClassName,
  omitCSSProps,
  pickHTMLProps,
  mergeRefs,
  createComponent,
  createElement,
  createHook
} from '../utils';

import * as styles from './styles';

export type LocalBoxProps = {
  use?: string | React.ComponentType<any>;
  className?: string;
  children?: React.ReactNode | ((props: BoxProps) => React.ReactNode);
  altitude?: string;
  showBreakpoint?: string;
  hiddenBreakpoint?: string;
  /* Component-level theme overrides [Read more](TODO) */
  overrides?: ThemeConfig;
  elementRef?: React.Ref<any>;
  themeKeyOverride?: string;
};
export type BoxProps = ReakitBoxProps & CSSProperties & LocalBoxProps;

const useProps = createHook<BoxProps>(
  (props, themeKey) => {
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
      styleProps: { ...props, style },
      prevClassName: props.className
    });

    // Append the Box styles as a className on the DOM element.
    className = useClassName({ style: styles.Box, styleProps: props, prevClassName: className, themeKey });

    // Pick out and invalid HTML props & omit the CSS props.
    const htmlProps = omitCSSProps(pickHTMLProps({ ...props, className }));

    if (props.elementRef) {
      htmlProps.ref = mergeRefs(props.elementRef, props.ref);
    }

    if (props.unstable_wrap) {
      htmlProps.unstable_wrap = props.unstable_wrap;
    }

    return { ...htmlProps };
  },
  { themeKey: 'Box' }
);

export const Box = createComponent<BoxProps>(
  props => {
    const boxProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: boxProps });
  },
  {
    attach: { useProps },
    themeKey: 'Box'
  }
);
