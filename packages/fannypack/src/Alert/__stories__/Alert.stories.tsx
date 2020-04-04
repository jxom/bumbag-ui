import * as React from 'react';
import { Alert, Stack } from '../../';

export default { title: 'Alert' };

export const _default = () => (
  <Alert hasIcon title="Did you know?" showCloseButton onClickClose={() => alert('Closed!')}>
    Fannypack is a React UI Kit.
  </Alert>
);

export const accents = () => (
  <Stack>
    <Alert accent>Fannypack is a React UI Kit.</Alert>
    <Alert accent="top" marginTop="major-2">
      Fannypack is a React UI Kit.
    </Alert>
    <Alert accent="bottom" marginTop="major-2">
      Fannypack is a React UI Kit.
    </Alert>
  </Stack>
);

export const titles = () => (
  <Stack>
    <Alert title="Did you know?">Fannypack is a React UI Kit.</Alert>
    <Alert title="Did you know?" isInline marginTop="major-2">
      Fannypack is a React UI Kit.
    </Alert>
  </Stack>
);

export const types = () => (
  <Stack>
    <Alert title="Did you know?" type="info">
      Fannypack is a React UI Kit.
    </Alert>
    <Alert title="Action applied" type="success" marginTop="major-2">
      Your action was applied successfully.
    </Alert>
    <Alert title="Be careful" type="warning" marginTop="major-2">
      Performing this action can be harmful.
    </Alert>
    <Alert title="An error occurred" type="danger" marginTop="major-2">
      Unable to apply your action.
    </Alert>
  </Stack>
);

export const icons = () => (
  <Stack>
    <Alert hasIcon title="Did you know?" type="info">
      Fannypack is a React UI Kit.
    </Alert>
    <Alert hasIcon title="Action applied" type="success" marginTop="major-2">
      Your action was applied successfully.
    </Alert>
    <Alert hasIcon title="Be careful" type="warning" marginTop="major-2">
      Performing this action can be harmful.
    </Alert>
    <Alert hasIcon title="An error occurred" type="danger" marginTop="major-2">
      Unable to apply your action.
    </Alert>
  </Stack>
);
