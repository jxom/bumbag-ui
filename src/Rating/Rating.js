// @flow
import React, { Component } from 'react';
import times from 'lodash/times';

import type { Size } from '../types';
import RatingStar from './RatingStar';
import { Rating as _Rating } from './styled';

type Props = {
  className?: string,
  size: Size,
  rating?: number,
  maxRating?: string,
  onRate?: Function,
  disabled?: boolean
};

type State = {
  rating: ?number,
  isSelecting: boolean,
  isStateDirty: boolean,
  selectedIndex: ?number
};

class Rating extends Component<Props, State> {
  static defaultProps = {
    className: undefined,
    size: 'regular',
    rating: 0,
    maxRating: 5,
    onRate: undefined,
    disabled: false
  };

  state = {
    rating: this.props.rating,
    isSelecting: false,
    isStateDirty: false,
    selectedIndex: null
  };

  static getDerivedStateFromProps = (nextProps: Props, prevState: State) => {
    if (prevState.isStateDirty && nextProps.rating !== prevState.rating) {
      return { ...prevState, rating: nextProps.rating, isStateDirty: false };
    }
    return null;
  };

  handleStarClick = (index: number) => {
    const { onRate, disabled } = this.props;
    const rating = index + 1;

    if (!disabled) {
      this.setState({ rating });
      onRate && onRate({ rating, isStateDirty: true });
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
        {times(maxRating, index => (
          <RatingStar
            key={index}
            size={size}
            active={isSelecting ? selectedIndex >= index : rating >= index + 1}
            onClick={() => this.handleStarClick(index)}
            onMouseEnter={() => this.handleStarMouseOver(index)}
          />
        ))}
      </_Rating>
    );
  }
}

export default Rating;
