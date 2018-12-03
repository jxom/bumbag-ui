import React from 'react';
import render from '../../_utils/tests/render';
import Avatar from '../Avatar';
it('renders correctly for a default avatar', () => {
  const { container } = render(
    <Avatar src="https://raw.githubusercontent.com/bigbellies/fannypack/master/src/_docs/bean.jpg" alt="Mr bean" />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an avatar with an initials prop set', () => {
  const { container } = render(<Avatar initials="SW" alt="SW" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an avatar with a size prop set', () => {
  const { container } = render(<Avatar initials="SW" size="large" alt="SW" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an avatar with a custom size prop set', () => {
  const { container } = render(<Avatar initials="SW" size={50} alt="SW" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an avatar with a palette prop set', () => {
  const { container } = render(<Avatar initials="SW" palette="primary" alt="SW" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an avatar with a fit prop set', () => {
  const { container } = render(
    <Avatar
      src="https://raw.githubusercontent.com/bigbellies/fannypack/master/src/_docs/bean.jpg"
      fit="cover"
      alt="Mr bean"
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
