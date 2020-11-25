import * as React from 'react';
import { Box as ReakitBox, BoxProps as ReakitBoxProps } from 'reakit';

import { ThemeConfig, CSSProperties } from '../types';
import {
  useStyle,
  useClassName,
  omitCSSProps,
  pickHTMLProps,
  mergeRefs,
  createComponent,
  createElement,
  createHook,
} from '../utils';

import * as styles from './Box.styles';

type ComponentType<R> = React.ComponentType<R> & { useProps: any };

export type LocalBoxProps = {
  use?: string | ComponentType<any>;
  className?: string;
  children?: React.ReactNode | ((props: BoxProps) => React.ReactNode);
  alignX?: 'left' | 'center' | 'right';
  alignY?: 'top' | 'center' | 'bottom';
  altitude?: string;
  variant?: string;
  colorMode?: string;
  disabled?: boolean;
  /* Component-level theme overrides [Read more](/theming/#component-theming) */
  overrides?: ThemeConfig;
  elementRef?: React.Ref<any>;
  themeKey?: string;
};
export type BoxProps = ReakitBoxProps & CSSProperties & LocalBoxProps;

const useProps = createHook<BoxProps>(
  (_props, { disableCSSProps, themeKey }) => {
    let props = _props;
    const { use } = props;

    if (use && typeof use !== 'string' && use.useProps) {
      const newProps = use.useProps({ ...props, use: undefined });
      props = { ...props, ...newProps };
    }

    // Convert CSS props to an object.
    // Example input:
    // props = { color: 'red', backgroundColor: 'blue', isEnabled: true }
    //
    // Example output:
    // style = { color: 'red', backgroundColor: 'blue' }
    const style = useStyle(props, { disableCSSProps });

    // Append the styles from above as a className on the DOM element (with precedence).
    let className = useClassName({
      style: styles.style,
      styleProps: { ...props, style },
      themeKey,
      prevClassName: props.className,
    });

    // Append the Box styles as a className on the DOM element.
    className = useClassName({
      style: styles.Box,
      styleProps: props,
      prevClassName: className,
      themeKey,
    });

    // Pick out and invalid HTML props & omit the CSS props.
    const htmlProps = omitCSSProps(pickHTMLProps({ ...props, className }));
    // const htmlProps = { ...props, className };

    if (props.elementRef) {
      // @ts-ignore
      htmlProps.ref = mergeRefs(props.elementRef, props.ref);
    }

    if (props.wrapElement) {
      // @ts-ignore
      htmlProps.wrapElement = props.wrapElement;
    }
    return { ...htmlProps };
  },
  { themeKey: 'Box' }
);

export const Box = createComponent<BoxProps>(
  (props) => {
    const boxProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: boxProps });
  },
  {
    attach: { displayName: 'Box', useProps },
    themeKey: 'Box',
  }
);
