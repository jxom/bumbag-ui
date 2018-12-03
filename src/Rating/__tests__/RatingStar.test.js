import React from 'react';
import render from '../../_utils/tests/render';
import RatingStar from '../RatingStar';

it('renders correctly in basic form', () => {
  const { container } = render(<RatingStar />);
  expect(container).toMatchSnapshot();
});

it('renders correctly when active', () => {
  const { container } = render(<RatingStar active />);
  expect(container).toMatchSnapshot();
});

describe('sizes', () => {
  ['small', 'medium', 'large'].forEach(size => {
    it(`renders correctly for a select with size ${size}`, () => {
      const { container } = render(<RatingStar size={size} />);
      expect(container).toMatchSnapshot();
    });
  });
});
