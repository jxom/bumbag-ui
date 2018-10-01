import React from 'react';
import render from '../../_utils/tests/render';
import Heading from '../Heading';
import 'jest-styled-components';

it('renders correctly for a basic heading', () => {
  const { container } = render(<Heading>test</Heading>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a heading of a different element', () => {
  const { container } = render(<Heading as="h3">test</Heading>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a subheading', () => {
  const { container } = render(
    <Heading as="h3" isSubHeading>
      test
    </Heading>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a heading with a subheading', () => {
  const { container } = render(
    <div>
      <Heading as="h3">heading</Heading>
      <Heading as="h5" isSubHeading>
        subheading
      </Heading>
    </div>
  );
  expect(container.firstChild).toMatchSnapshot();
});
