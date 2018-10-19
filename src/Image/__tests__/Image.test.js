import React from 'react';
import render from '../../_utils/tests/render';
import Image from '../Image';
import 'jest-styled-components';

it('renders correctly for a basic image', () => {
  const { container } = render(
    <Image src="https://raw.githubusercontent.com/bigbellies/fannypack/master/src/_docs/bean.jpg" alt="Bean" />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a fixed image', () => {
  const { container } = render(
    <Image
      isFixed
      src="https://raw.githubusercontent.com/bigbellies/fannypack/master/src/_docs/bean.jpg"
      alt="Bean"
      width={500}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a fitted image (contain)', () => {
  const { container } = render(
    <Image
      fit="contain"
      height={300}
      width={300}
      src="https://raw.githubusercontent.com/bigbellies/fannypack/master/src/_docs/bean.jpg"
      alt="Bean"
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a fitted image (cover)', () => {
  const { container } = render(
    <Image
      fit="cover"
      height={300}
      width={300}
      src="https://raw.githubusercontent.com/bigbellies/fannypack/master/src/_docs/bean.jpg"
      alt="Bean"
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a fitted image with a position', () => {
  const { container } = render(
    <Image
      fit="contain"
      fitPosition="top"
      height={300}
      width={300}
      src="https://raw.githubusercontent.com/bigbellies/fannypack/master/src/_docs/bean.jpg"
      alt="Bean"
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a fitted image with a position', () => {
  const { container } = render(
    <Image
      fit="contain"
      fitPosition="10px 5px"
      height={300}
      width={300}
      src="https://raw.githubusercontent.com/bigbellies/fannypack/master/src/_docs/bean.jpg"
      alt="Bean"
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
