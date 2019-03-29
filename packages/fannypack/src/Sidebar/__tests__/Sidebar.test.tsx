import * as React from 'react';
import render from '../../_utils/tests/render';
import { Box } from '../../primitives';
import Sidebar from '../Sidebar';

jest.mock('reakit/Portal', () => 'portal');

it('renders correctly for a default Sidebar', () => {
  const { container } = render(
    <Sidebar.Container defaultVisible>
      {sidebar => <Sidebar {...sidebar}>This is the content</Sidebar>}
    </Sidebar.Container>,
    { theme: { Toast: { disabled: true } } }
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a Sidebar with align prop set', () => {
  const { container } = render(
    <Sidebar.Container defaultVisible>
      {sidebar => (
        <Sidebar align="right" {...sidebar}>
          This is the content
        </Sidebar>
      )}
    </Sidebar.Container>,
    { theme: { Toast: { disabled: true } } }
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a Sidebar with hideCloseButton prop set', () => {
  const { container } = render(
    <Sidebar.Container defaultVisible>
      {sidebar => (
        <Sidebar hideCloseButton {...sidebar}>
          This is the content
        </Sidebar>
      )}
    </Sidebar.Container>,
    { theme: { Toast: { disabled: true } } }
  );
  expect(container.firstChild).toMatchSnapshot();
});
