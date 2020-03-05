import * as React from 'react';
import { Dialog, Stack, Text } from '../../';

export default { title: 'Dialog' };

export const _default = () => <Dialog>test</Dialog>;

export const footer = () => (
  <Dialog title="This is a title" footer={<Text>This is a footer</Text>} width="600px">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
    eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
    augue sit amet justo.
  </Dialog>
);

export const actionButtons = () => (
  <Dialog
    actionButtonsProps={{ onClickSubmit: () => alert('Submitted') }}
    title="This is a title"
    showActionButtons
    width="600px"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
    eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
    augue sit amet justo.
  </Dialog>
);

export const closeButton = () => (
  <Dialog onClickClose={() => console.log('close')} showCloseButton title="This is a title" width="600px">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
    eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
    augue sit amet justo.
  </Dialog>
);

export const types = () => (
  <Stack>
    <Dialog type="info" title="This is a title" showActionButtons width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Dialog>
    <Dialog type="success" title="This is a title" showActionButtons width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Dialog>
    <Dialog type="warning" title="This is a title" showActionButtons width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Dialog>
    <Dialog
      type="danger"
      title="This is a title"
      showActionButtons
      actionButtonsProps={{ palette: 'danger' }}
      width="600px"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Dialog>
  </Stack>
);
