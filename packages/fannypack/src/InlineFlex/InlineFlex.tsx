import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineFlexProps = {};
export type InlineFlexProps = BoxProps & LocalInlineFlexProps;

function useProps(props: Partial<InlineFlexProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.InlineFlex,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const InlineFlex = utils.createComponent<InlineFlexProps>(
  props => {
    const { children, use, ...restProps } = props;
    const inlineFlexProps = useProps(restProps);
    return utils.createElement({ children, component: ReakitBox, use, htmlProps: inlineFlexProps });
  },
  {
    useProps
  }
);
