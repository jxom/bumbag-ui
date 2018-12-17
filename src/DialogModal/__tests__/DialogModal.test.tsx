import * as React from 'react';
import render from '../../_utils/tests/render';
import Modal from '../../Modal';
import DialogModal from '../DialogModal';

jest.mock('reakit/Portal', () => 'portal');

it('renders correctly for a default dialog modal', () => {
  const { container } = render(
    <Modal.Container defaultVisible>
      {modal => <DialogModal {...modal}>This is the content</DialogModal>}
    </Modal.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a dialog modal with a close button', () => {
  const { container } = render(
    <Modal.Container defaultVisible>
      {modal => (
        <DialogModal title="This is a title" showCloseButton {...modal}>
          This is the content
        </DialogModal>
      )}
    </Modal.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a dialog modal with a title', () => {
  const { container } = render(
    <Modal.Container defaultVisible>
      {modal => (
        <DialogModal title="This is a title" {...modal}>
          This is the content
        </DialogModal>
      )}
    </Modal.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a dialog modal with action buttons', () => {
  const { container } = render(
    <Modal.Container defaultVisible>
      {modal => (
        <DialogModal title="This is a title" showActionButtons {...modal}>
          This is the content
        </DialogModal>
      )}
    </Modal.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a dialog modal with a footer', () => {
  const { container } = render(
    <Modal.Container defaultVisible>
      {modal => (
        <DialogModal footer="This is a footer" title="This is a title" {...modal}>
          This is the content
        </DialogModal>
      )}
    </Modal.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a dialog modal with kind alert', () => {
  const { container } = render(
    <Modal.Container defaultVisible>
      {modal => (
        <DialogModal kind="alert" {...modal}>
          This is the content
        </DialogModal>
      )}
    </Modal.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a dialog modal with type', () => {
  const { container } = render(
    <Modal.Container defaultVisible>
      {modal => (
        <DialogModal type="danger" {...modal}>
          This is the content
        </DialogModal>
      )}
    </Modal.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});
