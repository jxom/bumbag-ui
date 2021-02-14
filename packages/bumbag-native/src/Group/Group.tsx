import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './Group.styles';
import { useBreakpoint } from '../utils';

export type LocalGroupProps = {
  /** Sets the border radius of the group. */
  borderRadius?: string;
  /** Sets the orientation of the group. */
  orientation?: 'vertical' | 'horizontal';
  /** Sets the breakpoint at which the group should snap to be vertical. */
  verticalBelow?: string;
};
export type GroupProps = BoxProps & RNViewProps & LocalGroupProps;

const useProps = createHook<GroupProps>(
  (props) => {
    const { borderRadius, orientation, verticalBelow } = props;

    const isVertical = useBreakpoint('width', `max-${verticalBelow}`);

    const boxProps = Box.useProps(props);

    let children = boxProps.children;
    if (!Array.isArray(children)) {
      children = [children];
    }
    return {
      ...boxProps,
      children: children.map((child, i) =>
        React.cloneElement(child, {
          key: i, // eslint-disable-line
          ...(orientation === 'horizontal' && !isVertical
            ? {
                borderLeftWidth: child.props?.borderLeftWidth || (i === 0 ? undefined : '0px'),
                borderLeftRadius: child.props?.borderLeftRadius || (i === 0 ? borderRadius : '0'),
                borderRightRadius: child.props?.borderRightRadius || (i === children.length - 1 ? borderRadius : '0'),
              }
            : {}),
          ...(orientation === 'vertical' || isVertical
            ? {
                borderTopWidth: child.props?.borderTopWidth || (i === 0 ? undefined : '0px'),
                borderTopRadius: child.props?.borderTopRadius || (i === 0 ? borderRadius : '0'),
                borderBottomRadius: child.props?.borderBottomRadius || (i === children.length - 1 ? borderRadius : '0'),
              }
            : {}),
        })
      ),
    };
  },
  { defaultProps: { borderRadius: 'default', orientation: 'horizontal' }, themeKey: 'native.Group' }
);

export const Group = createComponent<GroupProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledGroup,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Group',
    },
    themeKey: 'native.Group',
  }
);
