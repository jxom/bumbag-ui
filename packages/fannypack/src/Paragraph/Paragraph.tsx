import { Box as ReakitBox } from 'reakit';

import { ParagraphThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalParagraphProps = {};
export type ParagraphProps = BoxProps & LocalParagraphProps;

const useProps = createHook<ParagraphProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Paragraph,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Paragraph' }
);

export const Paragraph = createComponent<ParagraphProps>(
  props => {
    const paragraph = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: paragraph });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      use: 'p'
    },
    themeKey: 'Paragraph'
  }
);
