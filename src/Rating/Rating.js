// @flow
import React, { Component } from 'react';
import times from 'lodash/times';

import type { Size } from '../types';
import RatingStar from './RatingStar';
import _Rating from './styled';

type Props = {
  className?: string,
  size: Size,
  rating?: number,
  maxRating?: string,
  onRate?: Function
};

type State = {
  rating: ?number,
  isSelecting: boolean,
  isStateDirty: boolean,
  selectedIndex: ?number
};

class Rating extends Component<Props, State> {
  static defaultProps = {
    className: null,
    size: 'regular',
    rating: 0,
    maxRating: 5,
    onRate: null
  };

  state = {
    rating: this.props.rating,
    isSelecting: false,
    isStateDirty: false,
    selectedIndex: null
  };

  static getDerivedStateFromProps = (nextProps: Props, prevState: State) => {
    if (prevState.isStateDirty && nextProps.rating !== prevState.rating) {
      console.log('setting rating ', prevState.rating, ' to ', nextProps.rating);
      return { ...prevState, rating: nextProps.rating, isStateDirty: false };
    }
    return null;
  };

  handleStarClick = (index: number) => {
    const { onRate } = this.props;
    const rating = index + 1;

    this.setState({ rating });
    onRate && onRate({ rating, isStateDirty: true });
  };

  handleStarMouseOver = (index: number) => {
    this.setState({ isSelecting: true, selectedIndex: index });
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
