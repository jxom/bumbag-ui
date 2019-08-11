import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalParagraphProps = {};
export type ParagraphProps = BoxProps & LocalParagraphProps;

Paragraph.defaultProps = {
  use: 'p'
};

function useProps(props: Partial<ParagraphProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Paragraph,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}
Paragraph.useProps = useProps;

export function Paragraph(props: ParagraphProps) {
  const { use, children, ...restProps } = props;
  const htmlProps = useProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={htmlProps}>
      {children}
    </utils.Element>
  );
}
