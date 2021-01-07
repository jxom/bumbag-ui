import * as React from 'react';
import { ViewProps } from 'react-native';

import { ThemeConfig, CSSProperties } from 'bumbag/types';
import { mergeRefs, createComponent, createElement, createHook } from 'bumbag/utils';
import { useStyle } from '../utils/useStyle';

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
export type BoxProps = CSSProperties & LocalBoxProps;

const useProps = createHook<BoxProps>(
  (_props, { disableCSSProps }) => {
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
    const style = useStyle({ ...props, ...props.style }, { disableCSSProps });

    props.style = style;

    // // Append the styles from above as a className on the DOM element (with precedence).
    // let className = useClassName({
    //   style: styles.style,
    //   styleProps: { ...props, style },
    //   themeKey,
    //   prevClassName: props.className,
    // });

    // // Append the Box styles as a className on the DOM element.
    // className = useClassName({
    //   style: styles.Box,
    //   styleProps: props,
    //   prevClassName: className,
    //   themeKey,
    // });

    // Pick out and invalid HTML props & omit the CSS props.
    // const htmlProps = omitCSSProps(pickHTMLProps({ ...props, className }));

    if (props.elementRef) {
      // @ts-ignore
      props.ref = mergeRefs(props.elementRef, props.ref);
    }

    return props;
  },
  { themeKey: 'Box' }
);

export const Box = createComponent<ViewProps & BoxProps>(
  (props) => {
    const boxProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledBox,
      use: props.use,
      htmlProps: boxProps,
    });
  },
  {
    attach: { displayName: 'Box', useProps },
    themeKey: 'Box',
  }
);
