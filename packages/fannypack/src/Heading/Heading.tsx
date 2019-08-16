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
    const { children, use, ...restProps } = props;
    const HeadingProps = useProps(restProps);
    return createElement({ children, component: ReakitBox, use, htmlProps: HeadingProps });
  },
  {
    defaultProps: { isSubHeading: false, use: 'h1' },
    useProps
  }
);
