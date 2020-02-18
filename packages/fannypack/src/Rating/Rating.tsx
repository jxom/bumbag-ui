import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Icon, IconProps } from '../Icon';

import * as styles from './styles';

export type LocalRatingProps = {};
export type RatingProps = BoxProps & LocalRatingProps;

const useProps = createHook<RatingProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Rating,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className, children: <Icon icon="star" /> };
  },
  { themeKey: 'Rating' }
);

export const Rating = createComponent<RatingProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Rating'
  }
);
