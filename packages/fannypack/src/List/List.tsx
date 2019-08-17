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
    const { children, ...restProps } = props;

    let use = restProps.use;
    if (!use) {
      use = restProps.isOrdered ? 'ol' : 'ul';
    }

    const listProps = useProps(restProps);

    return createElement({ children, component: ReakitBox, use, htmlProps: listProps });
  },
  {
    defaultProps: {
      isOrdered: false,
      isHorizontal: false
    },
    useProps
  }
);
