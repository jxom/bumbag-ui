import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalParagraphProps = {};
export type ParagraphProps = BoxProps & LocalParagraphProps;

function useProps(props: Partial<ParagraphProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Paragraph,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Paragraph = utils.createComponent<ParagraphProps>(
  props => {
    const { children, use, ...restProps } = props;
    const paragraph = useProps(restProps);
    return utils.createElement({ children, component: ReakitBox, use, htmlProps: paragraph });
  },
  {
    defaultProps: {
      use: 'p'
    },
    useProps
  }
);
