import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalListItemProps = {};
export type ListItemProps = BoxProps & LocalListItemProps;

const useProps = createHook<ListItemProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.ListItem,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'List.Item' }
);

export const ListItem = createComponent<ListItemProps>(
  (props) => {
    const listItemProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: listItemProps });
  },
  {
    attach: {
      useProps,
    },
    defaultProps: {
      use: 'li',
    },
    themeKey: 'List.Item',
  }
);
