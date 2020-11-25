import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Autosuggest.styles';

export type LocalAutosuggestStaticItemProps = {};
export type AutosuggestStaticItemProps = BoxProps & LocalAutosuggestStaticItemProps;

const useProps = createHook<AutosuggestStaticItemProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.AutosuggestStaticItem,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Autosuggest.StaticItem' }
);

export const AutosuggestStaticItem = createComponent<AutosuggestStaticItemProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Autosuggest.StaticItem',
    },
    themeKey: 'Autosuggest.StaticItem',
  }
);
