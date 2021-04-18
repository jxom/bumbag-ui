import * as React from 'react';
import { Box, Columns, Stack, Button, Set } from '../../';

export default { title: 'Columns' };

export const _default = () => (
  <Columns>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        First column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Second column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Third column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Fourth column
      </Box>
    </Columns.Column>
  </Columns>
);

export const sizes = () => (
  <Columns>
    <Columns.Column spread={6}>
      <Box backgroundColor="primary" color="white" padding="0.5rem">
        6
      </Box>
    </Columns.Column>
    <Columns.Column spread={3}>
      <Box backgroundColor="primary" color="white" padding="0.5rem">
        3
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Auto (2)
      </Box>
    </Columns.Column>
    <Columns.Column spread={1}>
      <Box backgroundColor="primary" color="white" padding="0.5rem">
        1
      </Box>
    </Columns.Column>
  </Columns>
);

export const offsets = () => (
  <Box>
    <Columns>
      <Columns.Column spread={6}>
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          6
        </Box>
      </Columns.Column>
      <Columns.Column spread={2} spreadOffset="left">
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          2
        </Box>
      </Columns.Column>
    </Columns>

    <Columns>
      <Columns.Column spread={2} spreadOffset="right">
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          2
        </Box>
      </Columns.Column>
      <Columns.Column spread={6}>
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          6
        </Box>
      </Columns.Column>
    </Columns>

    <Columns>
      <Columns.Column spread={6}>
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          6
        </Box>
      </Columns.Column>
      <Columns.Column spread={2} spreadOffset="both">
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          2
        </Box>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column spread={6}>
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          6
        </Box>
      </Columns.Column>
      <Columns.Column spread={3} spreadOffset={3}>
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          3
        </Box>
      </Columns.Column>
    </Columns>

    <Columns>
      <Columns.Column spread={2}>
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          2
        </Box>
      </Columns.Column>
      <Columns.Column spread={6} spreadOffset={4}>
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          6
        </Box>
      </Columns.Column>
    </Columns>

    <Columns>
      <Columns.Column spread={6}>
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          6
        </Box>
      </Columns.Column>
      <Columns.Column spread={3} spreadOffset={2}>
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          3
        </Box>
      </Columns.Column>
    </Columns>
  </Box>
);

export const variableColumnSizes = () => (
  <Box>
    <Columns>
      <Columns.Column spread={10} spreadDesktop={8} spreadMobile={6}>
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          All: 10
          <br />
          Desktop: 8<br />
          Mobile: 6
        </Box>
      </Columns.Column>
      <Columns.Column spread={2} spreadDesktop={4} spreadMobile={6}>
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          All: 2<br />
          Desktop: 4<br />
          Mobile: 6
        </Box>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column
        spread={10}
        spreadOffset={1}
        spreadDesktop={8}
        spreadDesktopOffset={2}
        spreadTablet={4}
        spreadTabletOffset={4}
      >
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          All: 10
          <br />
          Desktop: 8<br />
          Tablet: 4
        </Box>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column spread={10} spreadDesktop={8} spreadTablet={4} spreadOffset="both">
        <Box backgroundColor="primary" color="white" padding="0.5rem">
          All: 10
          <br />
          Desktop: 8<br />
          Tablet: 4
        </Box>
      </Columns.Column>
    </Columns>
  </Box>
);

export const mobileColumns = () => (
  <Columns minBreakpoint="mobile">
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        First column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Second column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Third column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Fourth column
      </Box>
    </Columns.Column>
  </Columns>
);

export const oneLineColumns = () => (
  <Columns isOneLine>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        First column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Second column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Third column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Fourth column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Fifth column
      </Box>
    </Columns.Column>
  </Columns>
);

export const gapless = () => (
  <Columns isGapless>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        First column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Second column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Third column
      </Box>
    </Columns.Column>
    <Columns.Column>
      <Box backgroundColor="whitesmoke" padding="0.5rem">
        Fourth column
      </Box>
    </Columns.Column>
  </Columns>
);
