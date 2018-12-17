import * as React from 'react';
import { BoxProps as ReakitBoxProps } from '@jmoxey/reakit/ts';
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

export class Rating extends React.Component<LocalRatingProps, RatingState> {
  static defaultProps = {
    className: undefined,
    size: 'default',
    defaultRating: 0,
    maxRating: 5,
    onRate: undefined,
    disabled: false
  };

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
