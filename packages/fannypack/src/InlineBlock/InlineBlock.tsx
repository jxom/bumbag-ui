import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalInlineBlockProps = {};
export type InlineBlockProps = BoxProps & LocalInlineBlockProps;

function useProps(props: Partial<InlineBlockProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.InlineBlock,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const InlineBlock = utils.createComponent<InlineBlockProps>(
  props => {
    const { children, use, ...restProps } = props;
    const inlineBlockProps = useProps(restProps);
    return utils.createElement({ children, component: ReakitBox, use, htmlProps: inlineBlockProps });
  },
  {
    useProps
  }
);
