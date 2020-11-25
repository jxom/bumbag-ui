import { Box as ReakitBox } from 'reakit';

import { Palette } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Code.styles';

export type LocalCodeProps = {
  /** Indicates if the code should be placed in a block. */
  isBlock?: boolean;
  /** Color of the code (inline) block. */
  palette?: Palette;
};
export type CodeProps = BoxProps & LocalCodeProps;

const useProps = createHook<CodeProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Code,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  {
    defaultProps: {
      palette: 'default',
    },
    themeKey: 'Code',
  }
);

export const Code = createComponent<CodeProps>(
  (props) => {
    let use = props.use;
    if (!use) {
      use = props.isBlock ? 'pre' : 'code';
    }

    const codeProps = useProps(props);

    return createElement({ children: props.children, component: ReakitBox, use, htmlProps: codeProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Code',
    },
    themeKey: 'Code',
  }
);
