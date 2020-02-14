import { Box as ReakitBox } from 'reakit';

import { CodeThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalCodeProps = {
  isBlock?: boolean;
  palette?: string;
  overrides?: CodeThemeConfig;
};
export type CodeProps = BoxProps & LocalCodeProps;

const useProps = createHook<CodeProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Code,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  {
    defaultProps: {
      palette: 'default'
    },
    themeKey: 'Code'
  }
);

export const Code = createComponent<CodeProps>(
  props => {
    let use = props.use;
    if (!use) {
      use = props.isBlock ? 'pre' : 'code';
    }

    const codeProps = useProps(props);

    return createElement({ children: props.children, component: ReakitBox, use, htmlProps: codeProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Code'
  }
);
