import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { Size } from '../types';
import { useClassName, createComponent, createElement, createHook, times } from '../utils';
import { Box, BoxProps } from '../Box';
import { Flex, FlexProps } from '../Flex';
import { Rover } from '../Rover';
import { Icon } from '../Icon';

import * as styles from './Rating.styles';

export type LocalRatingProps = {
  /** Sets the color of the rating items. */
  color?: string;
  /** Indicates if the rating is disabled. */
  disabled?: boolean;
  /** Sets the custom item component. */
  item?: React.ReactElement<any>;
  /** Sets the items of the rating. */
  items?: Array<React.ReactElement<any>>;
  /** Indicates if the rating is radio. */
  isSingular?: boolean;
  /** Indicates the rating is static. */
  isStatic?: boolean;
  /** Sets the max value. */
  maxValue?: number;
  /** Function to invoke when the rating has changed. */
  onChange: (index: number) => void;
  /** Sets the size of the rating items. */
  size?: Size;
  /** Sets the value of the rating. */
  value: number | void;
  roverProps?: { baseId?: string; stopId?: string };
};
export type RatingProps = FlexProps & LocalRatingProps;

const useProps = createHook<RatingProps>(
  (props, { themeKey }) => {
    const {
      color,
      item,
      items,
      isSingular,
      isStatic,
      onChange,
      overrides,
      maxValue,
      roverProps,
      size,
      value,
      ...restProps
    } = props;
    const flexProps = Flex.useProps(restProps);

    const rover = Rover.useState();

    const [hoveringIndex, setHoveringIndex] = React.useState(-1);

    const className = useClassName({
      style: styles.Rating,
      styleProps: props,
      themeKey,
      prevClassName: flexProps.className,
    });

    const disabled = props.disabled || isStatic;

    return {
      ...flexProps,
      className,
      onMouseLeave: !disabled ? () => setHoveringIndex(-1) : undefined,
      overrides,
      role: 'radiogroup',
      children: times(items ? items.length : maxValue, (index) => (
        <Rover key={index} {...rover} {...roverProps} disabled={disabled}>
          {(props) => (
            <RatingItem
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
              isStatic={isStatic}
              onClick={!disabled ? () => onChange(index + 1) : undefined}
              onMouseEnter={!disabled ? () => setHoveringIndex(index) : undefined}
              overrides={overrides}
              size={size}
            >
              {item || items?.[index]}
            </RatingItem>
          )}
        </Rover>
      )),
    };
  },
  { defaultProps: { maxValue: 5, value: 0 }, themeKey: 'Rating' }
);

export const Rating = createComponent<RatingProps>(
  (props) => {
    const ratingProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: ratingProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Rating',
    },
    themeKey: 'Rating',
  }
);

////////////////////////////////////////

export type LocalRatingItemProps = {
  isActive?: boolean;
  isStatic?: boolean;
  size?: Size;
};
export type RatingItemProps = BoxProps & LocalRatingItemProps;

const useRatingItemProps = createHook<RatingItemProps>(
  (props, { themeKey }) => {
    const { children, color, ...restProps } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.RatingItem,
      styleProps: { ...props, color },
      themeKey,
      prevClassName: boxProps.className,
    });

    return {
      ...boxProps,
      className,
      role: 'radio',
      children,
    };
  },
  { defaultProps: { children: <Icon icon="star" />, color: 'gold' }, themeKey: 'Rating.Item' }
);

export const RatingItem = createComponent<RatingItemProps>(
  (props) => {
    const ratingItemProps = useRatingItemProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: ratingItemProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Rating.Item',
    },
    themeKey: 'Rating.Item',
  }
);
