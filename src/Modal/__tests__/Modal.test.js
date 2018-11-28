import React from 'react';
import render from '../../_utils/tests/render';
import Modal from '../Modal';
import 'jest-styled-components';

jest.mock('reakit/Portal', () => 'portal');

it('renders correctly for a default modal', () => {
  const { container } = render(
    <Modal.Container defaultVisible>{modal => <Modal {...modal}>This is the content</Modal>}</Modal.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});
