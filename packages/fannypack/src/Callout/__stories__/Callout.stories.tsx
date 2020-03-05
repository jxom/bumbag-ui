import * as React from 'react';
import { ActionButtons, Callout, Stack, Button, Set } from '../../';

export default { title: 'Callout' };

export const _default = () => (
  <Callout width="600px">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
    eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
    augue sit amet justo.
  </Callout>
);

export const title = () => (
  <Callout title="Example callout" width="600px">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
    eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
    augue sit amet justo.
  </Callout>
);

export const types = () => (
  <Stack spacing="major-2">
    <Callout type="info" title="Example info callout" width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Callout>
    <Callout type="danger" title="Example danger callout" width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Callout>
    <Callout type="success" title="Example success callout" width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Callout>
    <Callout type="warning" title="Example warning callout" width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Callout>
  </Stack>
);

export const footer = () => (
  <Callout footer={<ActionButtons palette="info" justifyContent="flex-end" />} title="Example callout" width="600px">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
    eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
    augue sit amet justo.
  </Callout>
);

export const closeButton = () => (
  <Stack spacing="major-2">
    <Callout showCloseButton onClickClose={() => alert('Closed')} title="Example callout" width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Callout>
    <Callout showCloseButton onClickClose={() => alert('Closed')} width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Callout>
  </Stack>
);

export const tints = () => (
  <Stack spacing="major-2">
    <Callout hasTint type="info" title="Example info callout" width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Callout>
    <Callout hasTint type="danger" title="Example danger callout" width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Callout>
    <Callout hasTint type="success" title="Example success callout" width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Callout>
    <Callout hasTint type="warning" title="Example warning callout" width="600px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Callout>
  </Stack>
);

export const customIcon = () => (
  <Callout iconProps={{ icon: 'solid-igloo' }} title="Example callout" width="600px">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
    eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
    augue sit amet justo.
  </Callout>
);
