import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Label.styles';

export type LocalLabelProps = {
  htmlFor?: string;
};
export type LabelProps = BoxProps & LocalLabelProps;

const useProps = createHook<LabelProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Label,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Label' }
);

export const Label = createComponent<LabelProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Label',
    },
    defaultProps: {
      use: 'label',
    },
    themeKey: 'Label',
  }
);
