import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';
// @ts-ignore
import times from 'lodash/times';

import { Omit, Size } from '../types';
import RatingStar from './RatingStar';
import { Rating as _Rating } from './styled';

export type LocalRatingProps = {
  className?: string;
  size?: Size;
  defaultRating?: number;
  maxRating?: number;
  onRate?: ({ rating, maxRating }: { rating: number; maxRating?: number }) => void;
  disabled?: boolean;
};
export type RatingProps = LocalRatingProps & Omit<ReakitBoxProps, 'size'>;

export type RatingState = {
  rating: number | undefined;
  isSelecting: boolean;
  selectedIndex: number | undefined;
};

export const ratingPropTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  defaultRating: PropTypes.number,
  maxRating: PropTypes.number,
  onRate: PropTypes.func,
  disabled: PropTypes.bool
};

export const ratingDefaultProps = {
  className: undefined,
  size: 'default',
  defaultRating: 0,
  maxRating: 5,
  onRate: undefined,
  disabled: false
};

export class Rating extends React.Component<LocalRatingProps, RatingState> {
  static propTypes = ratingPropTypes;
  static defaultProps = ratingDefaultProps;

  state = {
    rating: this.props.defaultRating || 0,
    isSelecting: false,
    selectedIndex: 0
  };

  handleStarClick = (index: number) => {
    const { onRate, disabled, maxRating } = this.props;
    const rating = index + 1;

    if (!disabled) {
      this.setState({ rating });
      onRate && onRate({ rating, maxRating });
    }
  };

  handleStarMouseOver = (index: number) => {
    const { disabled } = this.props;
    !disabled && this.setState({ isSelecting: true, selectedIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ isSelecting: false });
  };

  render() {
    const { className, size, maxRating } = this.props;
    const { rating, selectedIndex, isSelecting } = this.state;

    return (
      <_Rating className={className} onMouseLeave={this.handleMouseLeave}>
        {times(maxRating, (index: number) => (
          <RatingStar
            key={index}
            active={isSelecting ? selectedIndex >= index : rating >= index + 1}
            aria-label={`${index + 1}`}
            onClick={() => this.handleStarClick(index)}
            onMouseEnter={() => this.handleStarMouseOver(index)}
            size={size}
          />
        ))}
      </_Rating>
    );
  }
}

// @ts-ignore
const C: React.FunctionComponent<RatingProps> = Rating;
export default C;
