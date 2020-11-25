import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Link.styles';

export type LocalLinkInlineProps = {};
export type LinkInlineProps = BoxProps & React.LinkHTMLAttributes<any> & LocalLinkInlineProps;

const useProps = createHook<LinkInlineProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.LinkInline,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Link.Inline' }
);

export const LinkInline = createComponent<LinkInlineProps>(
  (props) => {
    const linkInlineProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: linkInlineProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Link.Inline',
    },
    defaultProps: {
      use: 'a',
    },
    themeKey: 'Link.Inline',
  }
);
