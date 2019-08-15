import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import classNames from 'classnames';

import * as utils from '../utils';
import { HeadingThemeConfig } from '../types/theme';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalHeadingProps = {
  isSubHeading?: boolean;
  overrides?: HeadingThemeConfig;
};
export type HeadingProps = BoxProps & LocalHeadingProps;

Heading.defaultProps = {
  isSubHeading: false,
  use: 'h1'
};

function useProps(props: Partial<HeadingProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Heading,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className: classNames(className, props.isSubHeading ? 'sub-heading' : 'heading') };
}
Heading.useProps = useProps;

export function Heading(props: HeadingProps) {
  const { use, children, ...restProps } = props;
  const htmlProps = useProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={htmlProps}>
      {children}
    </utils.Element>
  );
}
