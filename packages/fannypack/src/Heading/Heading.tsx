import { Box as ReakitBox } from 'reakit';
import classNames from 'classnames';

import { useClassName, createComponent, createElement } from '../utils';
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

  const className = useClassName({
    style: styles.Heading,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className: classNames(className, props.isSubHeading ? 'sub-heading' : 'heading') };
}

export const Heading = createComponent<HeadingProps>(
  props => {
    const HeadingProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: HeadingProps });
  },
  {
    attach: {
      defaultProps: { isSubHeading: false, use: 'h1' },
      useProps
    },
    themeKey: 'Heading'
  }
);
