import { Box as ReakitBox } from 'reakit';

import { TextThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalTextProps = {
  overrides?: TextThemeConfig;
};
export type TextProps = BoxProps & LocalTextProps;

function useProps(props: Partial<TextProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Text,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Text = createComponent<TextProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      defaultProps: {
        use: 'span'
      },
      useProps
    },
    themeKey: 'Text'
  }
);
