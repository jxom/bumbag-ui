import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import _times from 'lodash/times';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Rover } from '../Rover';
import { Icon, IconProps } from '../Icon';

import * as styles from './styles';

export type LocalRatingProps = {
  color?: string;
  disabled?: boolean;
  maxValue?: number;
  onChange: (index: number) => void;
  value: number | void;
};
export type RatingProps = BoxProps & LocalRatingProps;

const useProps = createHook<RatingProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { disabled, onChange, maxValue, value, ...restProps } = props;
    const boxProps = Box.useProps(restProps);

    const rover = Rover.useState();

    const [hoveringIndex, setHoveringIndex] = React.useState(-1);

    const className = useClassName({
      style: styles.Rating,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return {
      ...boxProps,
      className,
      onMouseLeave: !disabled ? () => setHoveringIndex(-1) : undefined,
      role: 'radiogroup',
      children: _times(maxValue, index => (
        <Rover {...rover} disabled={disabled}>
          {props => (
            /*
            // @ts-ignore */
            <RatingItem
              key={index}
              {...props}
              aria-setsize={maxValue}
              aria-posinset={index + 1}
              aria-checked={value === index + 1}
              isActive={hoveringIndex >= 0 ? hoveringIndex >= index : value > index}
              onClick={!disabled ? () => onChange(index + 1) : undefined}
              onMouseEnter={!disabled ? () => setHoveringIndex(index) : undefined}
            />
          )}
        </Rover>
      ))
    };
  },
  { defaultProps: { maxValue: 5, value: 0 }, themeKey: 'Rating' }
);

export const Rating = createComponent<RatingProps>(
  props => {
    const ratingProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: ratingProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Rating'
  }
);

////////////////////////////////////////

export type LocalRatingItemProps = {
  isActive?: boolean;
};
export type RatingItemProps = BoxProps & LocalRatingItemProps;

const useRatingItemProps = createHook<RatingItemProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.RatingItem,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return {
      ...boxProps,
      className,
      role: 'radio',
      children: (
        /*
        // @ts-ignore */
        <Icon icon="star" />
      )
    };
  },
  { themeKey: 'Rating.Item' }
);

export const RatingItem = createComponent<RatingItemProps>(
  props => {
    const ratingItemProps = useRatingItemProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: ratingItemProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Rating.Item'
  }
);
