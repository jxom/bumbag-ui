import * as React from 'react';
import { Box, Grid, Stack, Button, Set } from '../../';

export default { title: 'Grid' };

export const _default = () => (
  <Box>
    <Grid
      template={`
  "a a a" 60px
  "b c c" minmax(200px, 1fr)
  "d d d" 100px / 150px
`}
    >
      <Grid.Item area="a" backgroundColor="red">
        Header
      </Grid.Item>
      <Grid.Item area="b" backgroundColor="green">
        Sidebar
      </Grid.Item>
      <Grid.Item area="c" backgroundColor="blue">
        Content
      </Grid.Item>
      <Grid.Item area="d" backgroundColor="yellow">
        Footer
      </Grid.Item>
    </Grid>
  </Box>
);
