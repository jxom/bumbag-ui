import * as React from 'react';
import { Box, Container, Stack, Button, Set } from '../../';

export default { title: 'Container' };

export const _default = () => (
  <Container>
    <Box backgroundColor="whitesmoke" padding="0.5rem">
      Hello world!
    </Box>
  </Container>
);

export const fixedWidth = () => (
  <Box>
    <Container breakpoint="desktop">
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Hello world!
      </Box>
    </Container>

    <Container breakpoint="mobile" marginTop="major-2">
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Hello world!
      </Box>
    </Container>
  </Box>
);

export const alignment = () => (
  <Box>
    <Container align="left" breakpoint="mobile">
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Hello world!
      </Box>
    </Container>

    <Container align="right" breakpoint="mobile" marginTop="major-2">
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Hello world!
      </Box>
    </Container>
  </Box>
);

export const fluid = () => (
  <Box>
    <Container isFluid>
      <Box backgroundColor="whitesmoke" padding="major-2">
        Hello world!
      </Box>
    </Container>
  </Box>
);
