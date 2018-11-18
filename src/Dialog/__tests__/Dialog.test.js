import React from 'react';
import render from '../../_utils/tests/render';
import Dialog from '../Dialog';
import 'jest-styled-components';

it('renders correctly for a default dialog', () => {
  const { container } = render(
    <Dialog>
      <Dialog.Header>
        <Dialog.Title>This is a title</Dialog.Title>
      </Dialog.Header>
      <Dialog.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
        ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum
        consectetur lectus augue sit amet justo.
      </Dialog.Content>
    </Dialog>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a dialog with a footer', () => {
  const { container } = render(
    <Dialog>
      <Dialog.Header>
        <Dialog.Title>This is a title</Dialog.Title>
      </Dialog.Header>
      <Dialog.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
        ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum
        consectetur lectus augue sit amet justo.
      </Dialog.Content>
      <Dialog.Footer>test</Dialog.Footer>
    </Dialog>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a dialog with a close button', () => {
  const { container } = render(
    <Dialog showCloseButton title="This is a title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Dialog>
  );
  expect(container.firstChild).toMatchSnapshot();
});
