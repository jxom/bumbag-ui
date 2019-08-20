import { Box as ReakitBox } from 'reakit';

import { ListThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalListProps = {
  isOrdered?: boolean;
  isHorizontal?: boolean;
  overrides?: ListThemeConfig;
};
export type ListProps = BoxProps & LocalListProps;

function useProps(props: Partial<ListProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.List,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const List = createComponent<ListProps>(
  props => {
    let use = props.use;
    if (!use) {
      use = props.isOrdered ? 'ol' : 'ul';
    }

    const listProps = useProps(props);

    return createElement({ children: props.children, component: ReakitBox, use, htmlProps: listProps });
  },
  {
    attach: {
      defaultProps: {
        isOrdered: false,
        isHorizontal: false
      },
      useProps
    },
    themeKey: 'List'
  }
);
