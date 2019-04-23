import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { Omit, Size } from '../types';
import { RatingStar as _RatingStar } from './styled';

export type LocalRatingStarProps = {
  active?: boolean;
  size?: string;
};
export type RatingStarProps = LocalRatingStarProps & Omit<ReakitBoxProps, 'size'>;

export const RatingStar: React.FunctionComponent<LocalRatingStarProps> = ({ size, active, ...props }) => (
  // @ts-ignore
  <_RatingStar use="svg" size={size} active={active} viewBox="0 0 24 24" {...props}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </_RatingStar>
);

export const ratingStarPropTypes = {
  active: PropTypes.bool,
  size: PropTypes.string
};
RatingStar.propTypes = ratingStarPropTypes;

export const ratingStarDefaultProps = {
  size: 'default',
  active: false
};
RatingStar.defaultProps = ratingStarDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<RatingStarProps> = RatingStar;
export default C;
