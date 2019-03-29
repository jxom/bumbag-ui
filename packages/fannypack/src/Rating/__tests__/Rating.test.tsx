import * as React from 'react';
import render from '../../_utils/tests/render';
import { fireEvent } from 'react-testing-library';
import Rating from '../Rating';
import { Size } from '../../types';

it('renders correctly for a basic rating', () => {
  const { container } = render(<Rating />);
  expect(container).toMatchSnapshot();
});

it('renders correctly with a default rating', () => {
  const { container } = render(<Rating defaultRating={3} />);
  expect(container).toMatchSnapshot();
});

it('renders correctly with a different max rating', () => {
  const { container } = render(<Rating maxRating={10} />);
  expect(container).toMatchSnapshot();
});

describe('sizes', () => {
  ['small', 'medium', 'large'].forEach(size => {
    it(`renders correctly for a select with size ${size}`, () => {
      const { container } = render(<Rating size={size as Size} />);
      expect(container).toMatchSnapshot();
    });
  });
});

describe('behavior', () => {
  it('should call onRate with correct values when a rating is selected', () => {
    const handleRate = jest.fn();
    const { getByLabelText } = render(<Rating onRate={handleRate} />);
    const fifthStar = getByLabelText('5');
    fireEvent.click(fifthStar);
    expect(handleRate).toHaveBeenCalledWith({ rating: 5, maxRating: 5 });
  });

  it('should call not call onRate when disabled', () => {
    const handleRate = jest.fn();
    const { getByLabelText } = render(<Rating onRate={handleRate} disabled />);
    const fifthStar = getByLabelText('5');
    fireEvent.click(fifthStar);
    expect(handleRate).not.toHaveBeenCalled();
  });
});
