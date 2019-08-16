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

function useProps(props: Partial<HeadingProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Heading,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className: classNames(className, props.isSubHeading ? 'sub-heading' : 'heading') };
}

export const Heading = utils.createComponent<HeadingProps>(
  props => {
    const { children, use, ...restProps } = props;
    const HeadingProps = useProps(restProps);
    return utils.createElement({ children, component: ReakitBox, use, htmlProps: HeadingProps });
  },
  {
    defaultProps: { isSubHeading: false, use: 'h1' },
    useProps
  }
);
