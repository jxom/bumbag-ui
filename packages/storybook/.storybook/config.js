import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { Box, Provider } from '../../fannypack/src';
import theme from '../../website/src/theme';

addDecorator(withA11y);
addDecorator(storyFn => (
  <Provider theme={theme}>
    <Box padding="major-2">{storyFn()}</Box>
  </Provider>
));

configure(require.context('../../fannypack/src', true, /\.stories\.tsx$/), module);
