import { Box as ReakitBox } from 'reakit';
import classNames from 'classnames';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { HeadingThemeConfig } from '../types/theme';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalHeadingProps = {
  isSubHeading?: boolean;
};
export type HeadingProps = BoxProps & LocalHeadingProps;

const useProps = createHook<HeadingProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Heading,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className: classNames(className, props.isSubHeading ? 'sub-heading' : 'heading') };
  },
  { defaultProps: { isSubHeading: false }, themeKey: 'Heading' }
);

export const Heading = createComponent<HeadingProps>(
  (props) => {
    const HeadingProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: HeadingProps });
  },
  {
    attach: {
      useProps,
    },
    defaultProps: { use: 'h1' },
    themeKey: 'Heading',
  }
);
