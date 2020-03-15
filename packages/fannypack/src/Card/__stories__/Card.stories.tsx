import * as React from 'react';
import { ActionButtons, Card, Stack, Button, Set } from '../../';

export default { title: 'Card' };

export const _default = () => (
  <Stack>
    <Card>Hello world</Card>
    <Card variant="shadow">Hello world</Card>
    <Card variant="border">Hello world</Card>
  </Stack>
);

export const header = () => (
  <Card title="This is a title">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
    eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
    augue sit amet justo.
  </Card>
);

export const headerWithAddons = () => (
  <Card
    title="This is a title"
    headerAddon={
      <Set>
        <Button palette="primary" variant="link">
          Action 1
        </Button>
        <Button palette="primary" variant="link">
          Action 2
        </Button>
      </Set>
    }
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
    eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
    augue sit amet justo.
  </Card>
);

export const footer = () => (
  <Card title="This is a title" footer={<ActionButtons justifyContent="flex-end" width="100%" />}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
    eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
    augue sit amet justo.
  </Card>
);
