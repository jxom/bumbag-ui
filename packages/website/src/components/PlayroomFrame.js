import React from 'react';
import { Box, Provider } from 'bumbag';

export default function Frame({ children, frameWindow }) { // eslint-disable-line
  return (
    <Provider>
      <Box>{children}</Box>
    </Provider>
  );
}
