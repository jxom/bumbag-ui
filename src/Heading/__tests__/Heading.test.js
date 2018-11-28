import React from 'react';
import render from '../../_utils/tests/render';
import Heading from '../Heading';
import 'jest-styled-components';

it('renders correctly for a basic heading', () => {
  const { container } = render(<Heading>test</Heading>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a heading of a different element', () => {
  const { container } = render(<Heading use="h3">test</Heading>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a subheading', () => {
  const { container } = render(
    <Heading use="h3" isSubHeading>
      test
    </Heading>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a heading with a subheading', () => {
  const { container } = render(
    <div>
      <Heading use="h3">heading</Heading>
      <Heading use="h5" isSubHeading>
        subheading
      </Heading>
    </div>
  );
  expect(container.firstChild).toMatchSnapshot();
});
