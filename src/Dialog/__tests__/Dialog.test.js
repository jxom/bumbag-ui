import React from 'react';
import render from '../../_utils/tests/render';
import Dialog from '../Dialog';
import 'jest-styled-components';

it('renders correctly for a default dialog', () => {
  const { container } = render(
    <Dialog title="This is a title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Dialog>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a dialog with a footer', () => {
  const { container } = render(
    <Dialog title="This is a title" footer={<div>test</div>}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Dialog>
  );
  expect(container.firstChild).toMatchSnapshot();
});
