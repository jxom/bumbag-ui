import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalTextProps = {};
export type TextProps = BoxProps & LocalTextProps;

function useProps(props: Partial<TextProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Text,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Text = utils.createComponent<TextProps>(
  props => {
    const { children, use, ...restProps } = props;
    const textProps = useProps(restProps);
    return utils.createElement({ children, component: ReakitBox, use, htmlProps: textProps });
  },
  {
    defaultProps: {
      use: 'span'
    },
    useProps
  }
);
