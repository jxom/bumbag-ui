import * as React from 'react';
import { Box, Modal, Text, Heading, Set } from '../../';

export default { title: 'Modal' };

export function _default() {
  const modal = Modal.useState();

  return (
    <div>
      <Modal.Disclosure {...modal}>Open modal</Modal.Disclosure>
      <Modal {...modal}>
        <Box>Hello world</Box>
      </Modal>
    </div>
  );
}

export function backdrop() {
  const modal = Modal.useState();

  return (
    <div>
      <Modal.Disclosure {...modal}>Open modal</Modal.Disclosure>
      <Modal.Backdrop {...modal} />
      <Modal {...modal}>Hello world</Modal>
    </div>
  );
}

export function placement() {
  const modal = Modal.useState();

  return (
    <div>
      <Modal.Disclosure {...modal}>Open modal</Modal.Disclosure>
      <Modal {...modal} placement="top">
        Hello world
      </Modal>
    </div>
  );
}
