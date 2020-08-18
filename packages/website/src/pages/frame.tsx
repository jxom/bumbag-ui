import * as React from 'react';
import { Box, Columns } from 'bumbag';

export default function Frame(props: any) {
  return (
    <Box padding="major-2">
      <Columns>
        <Columns.Column>
          <Box backgroundColor="primary" height="50px" />
        </Columns.Column>
        <Columns.Column>
          <Box backgroundColor="primary" height="50px" />
        </Columns.Column>
        <Columns.Column>
          <Box backgroundColor="primary" height="50px" />
        </Columns.Column>
        <Columns.Column>
          <Box backgroundColor="primary" height="50px" />
        </Columns.Column>
      </Columns>
    </Box>
  );
}
