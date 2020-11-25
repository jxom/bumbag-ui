import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './SelectMenu.styles';

export type LocalSelectMenuStaticItemProps = {};
export type SelectMenuStaticItemProps = BoxProps & LocalSelectMenuStaticItemProps;

const useProps = createHook<SelectMenuStaticItemProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.SelectMenuStaticItem,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'SelectMenu.StaticItem' }
);

export const SelectMenuStaticItem = createComponent<SelectMenuStaticItemProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'SelectMenu.StaticItem',
    },
    themeKey: 'SelectMenu.StaticItem',
  }
);
