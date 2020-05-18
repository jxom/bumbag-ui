import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import _get from 'lodash/get';
import _times from 'lodash/times';

import { Size } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Rover } from '../Rover';
import { Icon } from '../Icon';

import * as styles from './styles';

export type LocalRatingProps = {
  color?: string;
  disabled?: boolean;
  item?: React.ReactElement<any>;
  items?: Array<React.ReactElement<any>>;
  isSingular?: boolean;
  maxValue?: number;
  onChange: (index: number) => void;
  roverProps?: { baseId?: string; stopId?: string };
  size?: Size;
  value: number | void;
};
export type RatingProps = BoxProps & LocalRatingProps;

const useProps = createHook<RatingProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      color,
      disabled,
      item,
      items,
      isSingular,
      onChange,
      overrides,
      maxValue,
      roverProps,
      size,
      value,
      ...restProps
    } = props;
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
      overrides,
      role: 'radiogroup',
      children: _times(items ? items.length : maxValue, index => (
        <Rover {...rover} {...roverProps} disabled={disabled}>
          {props => (
            /*
            // @ts-ignore */
            <RatingItem
              key={index}
              {...props}
              aria-checked={value === index + 1}
              aria-posinset={index + 1}
              aria-setsize={maxValue}
              color={color}
              isActive={
                hoveringIndex >= 0
                  ? isSingular
                    ? hoveringIndex === index
                    : hoveringIndex >= index
                  : isSingular
                    ? value === index + 1
                    : value > index
              }
              onClick={!disabled ? () => onChange(index + 1) : undefined}
              onMouseEnter={!disabled ? () => setHoveringIndex(index) : undefined}
              overrides={overrides}
              size={size}
            >
              {item || _get(items, `[${index}]`)}
            </RatingItem>
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
  size?: Size;
};
export type RatingItemProps = BoxProps & LocalRatingItemProps;

const useRatingItemProps = createHook<RatingItemProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { children, color, ...restProps } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.RatingItem,
      styleProps: { ...props, color },
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return {
      ...boxProps,
      className,
      role: 'radio',
      children
    };
  },
  { defaultProps: { children: <Icon icon="star" />, color: 'gold' }, themeKey: 'Rating.Item' }
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
