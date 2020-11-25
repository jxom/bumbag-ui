import { Box as ReakitBox } from 'reakit';
import classNames from 'classnames';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Breakpoint } from '../types';
import { Box, BoxProps } from '../Box';

import * as styles from './Heading.styles';

export type LocalHeadingProps = {
  isSubHeading?: boolean;
  /** Indicates the breakpoint at which the heading font size should shrink. */
  shrinkBelow?: Breakpoint;
};
export type HeadingProps = BoxProps & LocalHeadingProps;

const useProps = createHook<HeadingProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props, { disableCSSProps: ['fontSize'] });

    const className = useClassName({
      style: styles.Heading,
      styleProps: props,
      themeKey,
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
      displayName: 'Heading',
    },
    defaultProps: { use: 'h1' },
    themeKey: 'Heading',
  }
);
