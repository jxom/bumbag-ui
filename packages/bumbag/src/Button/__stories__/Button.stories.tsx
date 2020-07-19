import * as React from 'react';
import { Button, Set } from '../../';

export default { title: 'Button' };

export const _default = () => <Button>Hello Button</Button>;

export const colors = () => (
  <Set>
    <Button>Default</Button>
    <Button palette="primary">Primary</Button>
    <Button palette="secondary">Secondary</Button>
    <Button palette="success">Success</Button>
    <Button palette="danger">Danger</Button>
    <Button palette="warning">Warning</Button>
  </Set>
);

export const icons = () => (
  <Set>
    <Button iconBefore="solid-clipboard">Copy</Button>
    <Button iconBefore="solid-pen" palette="primary">
      Edit
    </Button>
    <Button iconAfter="solid-long-arrow-alt-right">Continue</Button>
    <Button iconBefore="info-circle" iconBeforeProps={{ fontSize: '300' }}>
      Info
    </Button>
  </Set>
);

export const loading = () => (
  <Set>
    <Button isLoading>Hello world</Button>
    <Button isLoading spinnerProps={{ hasTrack: true, color: 'primary' }}>
      Hello world
    </Button>
  </Set>
);

export const outlines = () => (
  <Set>
    <Button palette="primary" variant="outlined">
      Primary
    </Button>
    <Button palette="secondary" variant="outlined">
      Secondary
    </Button>
    <Button palette="success" variant="outlined">
      Success
    </Button>
    <Button palette="danger" variant="outlined">
      Danger
    </Button>
  </Set>
);

export const ghost = () => (
  <Set>
    <Button variant="ghost">Default</Button>
    <Button palette="primary" variant="ghost">
      Primary
    </Button>
    <Button palette="success" variant="ghost">
      Success
    </Button>
    <Button palette="danger" variant="ghost">
      Danger
    </Button>
  </Set>
);

export const sizes = () => (
  <Set>
    <Button size="small">Small</Button>
    <Button>Default</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </Set>
);

export const links = () => (
  <Button palette="primary" variant="link">
    Default
  </Button>
);

export const _static = () => <Button isStatic>Static</Button>;

export const disabled = () => (
  <Set>
    <Button disabled>Default</Button>
    <Button palette="primary" disabled>
      Primary
    </Button>
    <Button palette="success" disabled>
      Success
    </Button>
    <Button palette="danger" disabled>
      Danger
    </Button>
    <Button palette="warning" disabled>
      Warning
    </Button>
  </Set>
);

export const closeButtons = () => (
  <Set>
    <Button.Close size="small" />
    <Button.Close />
    <Button.Close size="large" />
  </Set>
);
