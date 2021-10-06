import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './Level.styles';
import { useBreakpoint } from '../utils';

export type LocalLevelProps = {
  /** Sets the orientation of the level. */
  orientation?: 'vertical' | 'horizontal';
  /** Sets the spacing of the level when it snaps to a vertical orientation. */
  spacing?: string;
  /** Sets the breakpoint at which the level should become vertical. */
  verticalBelow?: string;
};
export type LevelProps = BoxProps & RNViewProps & LocalLevelProps;

const useProps = createHook<LevelProps>(
  (props) => {
    const { orientation, spacing, verticalBelow: _verticalBelow } = props;

    let verticalBelow = _verticalBelow;
    if (orientation === 'vertical') {
      verticalBelow = undefined;
    }

    const boxProps = Box.useProps({ ...props, alignX: undefined, alignY: undefined });

    const isCollapsed = useBreakpoint('width', `max-${verticalBelow}`);

    let children = boxProps.children;
    if (!Array.isArray(children)) {
      children = [children];
    }
    return {
      ...boxProps,
      alignX: props.alignX,
      alignY: props.alignY,
      children: children.map((child, i) =>
        child
          ? React.cloneElement(child, {
              key: i, // eslint-disable-line
              marginBottom:
                child?.props?.marginBottom ||
                (isCollapsed ? (i < children.length - 1 ? spacing : undefined) : undefined),
            })
          : null
      ),
    };
  },
  {
    defaultProps: { alignX: 'center', orientation: 'horizontal', spacing: 'major-2', verticalBelow: 'tablet' },
    themeKey: 'native.Level',
  }
);

export const Level = createComponent<LevelProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledLevel,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Level',
    },
    themeKey: 'native.Level',
  }
);
