import { Box as ReakitBox, useGroup as useReakitGroup } from 'reakit';

import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';
import { Breakpoint } from '../types';

import * as styles from './styles';

export type LocalGroupProps = {
  borderRadius?: string;
  isVertical?: boolean;
  verticalBreakpoint?: Breakpoint;
};
export type GroupProps = BoxProps & LocalGroupProps;

function useProps(props: Partial<GroupProps> = {}) {
  let htmlProps = props;
  const groupProps = useReakitGroup({}, htmlProps);
  htmlProps = Box.useProps({ ...props, ...groupProps });

  const className = useClassName({
    style: styles.Group,
    styleProps: props,
    prevClassName: htmlProps.className
  });

  return { ...htmlProps, className };
}

export const Group = createComponent<GroupProps>(
  props => {
    const groupProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: groupProps });
  },
  {
    attach: { useProps, defaultProps: { borderRadius: '4px' } },
    themeKey: 'Group'
  }
);
