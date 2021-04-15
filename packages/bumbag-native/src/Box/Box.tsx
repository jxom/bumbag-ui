import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { useActive, useFocus, useHover } from 'react-native-web-hooks';

import { CSSProperties } from 'bumbag/types';
import { mergeRefs, createComponent, createElement, createHook, omitCSSProps } from 'bumbag/utils';
import { useStyle } from '../utils/useStyle';
import { css } from '../styled';
import { ThemeConfig } from '../types/theme';

import * as styles from './Box.styles';

export type LocalBoxProps = {
  animated?: boolean;
  children?: React.ReactNode | ((props: BoxProps) => React.ReactNode);
  alignX?: 'left' | 'center' | 'right';
  alignY?: 'top' | 'center' | 'bottom';
  altitude?: string;
  variant?: string;
  colorMode?: string;
  disabled?: boolean;
  style?: any;
  /* Component-level theme overrides [Read more](/theming/#component-theming) */
  overrides?: ThemeConfig;
  elementRef?: React.Ref<any>;
  themeKey?: string;
};
export type BoxProps = Omit<CSSProperties, 'pointerEvents'> &
  RNViewProps &
  LocalBoxProps & {
    active?: boolean;
    focus?: boolean;
    hover?: boolean;
    hoveractive?: boolean;
  };

const useProps = createHook<BoxProps>(
  (_props, { disableCSSProps }) => {
    let props = _props;

    const boxRef = React.useRef();
    props.elementRef = mergeRefs(boxRef, props.elementRef);
    if (props._hover) {
      props.hover = useHover(boxRef);
    }
    if (props._active) {
      props.active = useActive(boxRef);
    }
    if (props._focus) {
      props.focus = useFocus(boxRef);
    }
    if (props._hoveractive) {
      props.hoveractive = props.hover && props.active;
    }

    const animationStyles = React.useMemo(
      () =>
        Object.entries(props).reduce((styles, [key, value]) => {
          if (value && typeof value === 'object' && '_listeners' in value) {
            return {
              ...styles,
              [key]: value,
            };
          }
          return styles;
        }, {}),
      [props]
    );

    // Convert CSS props to an object.
    // Example input:
    // props = { color: 'red', backgroundColor: 'blue', isEnabled: true }
    //
    // Example output:
    // style = { color: 'red', backgroundColor: 'blue' }
    let style = useStyle(
      { ...props, ...props.style },
      {
        disableCSSProps,
        events: {
          hover: props.hover,
          active: props.active,
          focus: props.focus,
          hoveractive: props.hoveractive,
        },
      }
    );

    if (Array.isArray(props.style) || typeof props.style !== 'object') {
      props.style = [
        css`
          ${style}
        `,
        animationStyles,
        ...(props.style || []),
      ];
    }

    // Pick out the CSS props
    props = omitCSSProps(props);

    if (props.elementRef) {
      // @ts-ignore
      props.ref = mergeRefs(props.elementRef, props.ref);
    }

    return props;
  },
  { themeKey: 'native.Box' }
);

export const Box = createComponent<BoxProps>(
  (props) => {
    const boxProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledBox,
      htmlProps: boxProps,
    });
  },
  {
    attach: { displayName: 'native.Box', useProps },
    themeKey: 'native.Box',
  }
);
