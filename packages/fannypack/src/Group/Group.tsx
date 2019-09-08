import { Box as ReakitBox, useGroup as useReakitGroup } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { LayoutBreakpoint } from '../types';

import * as styles from './styles';

export type LocalGroupProps = {
  borderRadius?: string;
  isVertical?: boolean;
  verticalBreakpoint?: LayoutBreakpoint;
};
export type GroupProps = BoxProps & LocalGroupProps;

const useProps = createHook<GroupProps>(
  (props, themeKey) => {
    let htmlProps = props;
    const groupProps = useReakitGroup({}, htmlProps);
    htmlProps = Box.useProps({ ...props, ...groupProps });

    const className = useClassName({
      style: styles.Group,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Group' }
);

export const Group = createComponent<GroupProps>(
  props => {
    const groupProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: groupProps });
  },
  {
    attach: { useProps },
    defaultProps: { borderRadius: '4px' },
    themeKey: 'Group'
  }
);
