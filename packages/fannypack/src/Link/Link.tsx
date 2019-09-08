import { Box as ReakitBox } from 'reakit';

import { LinkThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalLinkProps = {
  overrides?: LinkThemeConfig;
};
export type LinkProps = BoxProps & LocalLinkProps;

const useProps = createHook<LinkProps>(
  (props, themeKey) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Link,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Link' }
);

export const Link = createComponent<LinkProps>(
  props => {
    const linkProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: linkProps });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      use: 'a'
    },
    themeKey: 'Link'
  }
);
