import React from 'react';
import render from '../../_utils/tests/render';
import Icon from '../Icon';
it('renders correctly for a basic icon', () => {
  const { container } = render(<Icon a11yLabel="Settings" icon="cog" />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('colors', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(color => {
    it(`renders correctly for an icon with color ${color}`, () => {
      const { container } = render(<Icon a11yLabel="Settings" color={color} icon="cog" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('sizes', () => {
  ['small', 'medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge'].forEach(size => {
    it(`renders correctly for an icon with size ${size}`, () => {
      const { container } = render(<Icon a11yLabel="Settings" size={size} icon="cog" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
