import * as React from 'react';
import { Box, Heading, Stack, Button, Set } from '../../';

export default { title: 'Heading' };

export const _default = () => (
  <Box>
    <Heading>Heading 1</Heading>
    <Heading use="h2">Heading 2</Heading>
    <Heading use="h3">Heading 3</Heading>
    <Heading use="h4">Heading 4</Heading>
    <Heading use="h5">Heading 5</Heading>
    <Heading use="h6">Heading 6</Heading>
  </Box>
);

export const subHeadings = () => (
  <Box>
    <Heading isSubHeading>Heading 1</Heading>
    <Heading use="h2" isSubHeading>
      Heading 2
    </Heading>
    <Heading use="h3" isSubHeading>
      Heading 3
    </Heading>
    <Heading use="h4" isSubHeading>
      Heading 4
    </Heading>
    <Heading use="h5" isSubHeading>
      Heading 5
    </Heading>
    <Heading use="h6" isSubHeading>
      Heading 6
    </Heading>
  </Box>
);
