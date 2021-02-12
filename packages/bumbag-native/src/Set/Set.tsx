import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './Set.styles';

export type LocalSetProps = {
  /** Indicates if the set items should span the width of the set. */
  isFilled?: boolean;
  /** Indicates the orientation of the set. */
  orientation?: 'vertical' | 'horizontal';
  /** Sets the spacing between items. */
  spacing?: string;
  /** Indicates the breakpoint at which the set should become vertical. */
  verticalBelow?: string;
};
export type SetProps = BoxProps & RNViewProps & LocalSetProps;

const useProps = createHook<SetProps>(
  (props) => {
    const { spacing } = props;

    const boxProps = Box.useProps(props);

    let children = boxProps.children;
    if (!Array.isArray(children)) {
      children = [children];
    }
    return {
      ...boxProps,
      children: children.map((child, i) =>
        // eslint-disable-next-line
        React.cloneElement(child, { key: i, marginTop: spacing, marginLeft: spacing })
      ),
    };
  },
  {
    defaultProps: { isFilled: false, orientation: 'horizontal', spacing: 'minor-2', verticalBelow: undefined },
    themeKey: 'native.Set',
  }
);

export const Set = createComponent<SetProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledSet,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Set',
    },
    themeKey: 'native.Set',
  }
);
