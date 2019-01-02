import * as React from 'react';
import render from '../../_utils/tests/render';
import { Box } from '../../primitives';
import Modal from '../Modal';

jest.mock('reakit/Portal', () => 'portal');

it('renders correctly for a default modal', () => {
  const { container } = render(
    <Modal.Container defaultVisible>
      {modal => (
        <Modal {...modal}>
          {({ fallbackFocusRef }) => <Box elementRef={fallbackFocusRef}>This is the content</Box>}
        </Modal>
      )}
    </Modal.Container>,
    { theme: { Toast: { disabled: true } } }
  );
  expect(container.firstChild).toMatchSnapshot();
});
