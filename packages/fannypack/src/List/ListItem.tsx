import { Box as ReakitBox } from 'reakit';

import { ListThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalListItemProps = {
  overrides?: ListThemeConfig['Item'];
};
export type ListItemProps = BoxProps & LocalListItemProps;

function useProps(props: Partial<ListItemProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.ListItem,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const ListItem = createComponent<ListItemProps>(
  props => {
    const { children, use, ...restProps } = props;
    const listItemProps = useProps(restProps);
    return createElement({ children, component: ReakitBox, use, htmlProps: listItemProps });
  },
  {
    defaultProps: {
      use: 'li'
    },
    useProps
  }
);
