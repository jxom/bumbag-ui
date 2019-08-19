import { Box as ReakitBox } from 'reakit';

import { LinkThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalLinkProps = {
  overrides?: LinkThemeConfig;
};
export type LinkProps = BoxProps & LocalLinkProps;

function useProps(props: Partial<LinkProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Link,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Link = createComponent<LinkProps>(
  props => {
    const { children, use, ...restProps } = props;
    const linkProps = useProps(restProps);
    return createElement({ children, component: ReakitBox, use, htmlProps: linkProps });
  },
  {
    attach: {
      defaultProps: {
        use: 'a'
      },
      useProps
    },
    themeKey: 'Link'
  }
);
