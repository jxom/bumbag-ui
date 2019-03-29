import * as React from 'react';
import render from '../../_utils/tests/render';
import Icon from '../Icon';
import { Size } from '../../types';

it('renders correctly for a basic icon', () => {
  const { container } = render(<Icon a11yLabel="Settings" icon="info-circle" />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('colors', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(color => {
    it(`renders correctly for an icon with color ${color}`, () => {
      const { container } = render(<Icon a11yLabel="Settings" color={color} icon="info-circle" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('sizes', () => {
  ['100', '200', '300', '400', '500', '600', '700', '800', '900'].forEach(size => {
    it(`renders correctly for an icon with size ${size}`, () => {
      const { container } = render(<Icon a11yLabel="Settings" size={size as Size} icon="info-circle" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
