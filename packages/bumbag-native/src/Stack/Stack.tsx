import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './Stack.styles';

export type LocalStackProps = {
  /** Sets the orientation of the stack component. */
  orientation?: 'vertical' | 'horizontal';
  /** Sets the spacing between the stack items. */
  spacing?: string;
};
export type StackProps = BoxProps & RNViewProps & LocalStackProps;

const useProps = createHook<StackProps>(
  (props) => {
    const { orientation, spacing: _spacing, ...restProps } = props;

    const boxProps = Box.useProps(props);

    let children = boxProps.children;
    if (!Array.isArray(children)) {
      children = [children];
    }
    return {
      ...boxProps,
      children: children.map((child, i) => {
        let spacingKey = orientation === 'vertical' ? 'marginBottom' : 'marginRight';
        let spacing = _spacing;
        if (i === children.length - 1) {
          spacing = undefined;
        }
        if (!child) return null;
        return React.cloneElement(child, {
          key: i, // eslint-disable-line
          [spacingKey]: spacing,
          flexGrow: orientation === 'horizontal' ? '1' : undefined,
        });
      }),
    };
  },
  { defaultProps: { orientation: 'vertical', spacing: 'major-4' }, themeKey: 'native.Stack' }
);

export const Stack = createComponent<StackProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledStack,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Stack',
    },
    themeKey: 'native.Stack',
  }
);
