import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Link.styles';

export type LocalLinkProps = {};
export type LinkProps = BoxProps & React.LinkHTMLAttributes<any> & LocalLinkProps;

const useProps = createHook<LinkProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Link,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Link' }
);

export const Link = createComponent<LinkProps>(
  (props) => {
    const linkProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: linkProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Link',
    },
    defaultProps: {
      use: 'a',
    },
    themeKey: 'Link',
  }
);
