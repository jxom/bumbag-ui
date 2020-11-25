import { Box as ReakitBox, useGroup as useReakitGroup } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Flex, FlexProps } from '../Flex';
import { LayoutBreakpoint } from '../types';

import * as styles from './Group.styles';

export type LocalGroupProps = {
  /** Sets the border radius of the group. */
  borderRadius?: string;
  /** Sets the orientation of the group. */
  orientation?: 'vertical' | 'horizontal';
  /** Sets the breakpoint at which the group should snap to be vertical. */
  verticalBelow?: LayoutBreakpoint;
};
export type GroupProps = FlexProps & LocalGroupProps;

const useProps = createHook<GroupProps>(
  (props, { themeKey }) => {
    let htmlProps = props;
    const groupProps = useReakitGroup({}, htmlProps);
    htmlProps = Flex.useProps({ ...props, ...groupProps });

    const className = useClassName({
      style: styles.Group,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { defaultProps: { borderRadius: 'default' }, themeKey: 'Group' }
);

export const Group = createComponent<GroupProps>(
  (props) => {
    const groupProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: groupProps });
  },
  {
    attach: { useProps, displayName: 'Group' },
    themeKey: 'Group',
  }
);
