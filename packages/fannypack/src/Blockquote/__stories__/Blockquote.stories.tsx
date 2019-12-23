import * as React from 'react';
import { Badge, Box, Blockquote, Paragraph, Set } from '../../';

export default { title: 'Blockquote' };

export const _default = () => (
  <Box>
    <Blockquote>
      <Paragraph>"Out here, survival is the name of the game. Only it's not a game; it's deadly serious."</Paragraph>
      <Paragraph>- Russell Coight</Paragraph>
    </Blockquote>
    <Blockquote backgroundColor="whitesmoke" marginTop="major-2">
      <Paragraph>"Out here, survival is the name of the game. Only it's not a game; it's deadly serious."</Paragraph>
      <Paragraph>- Russell Coight</Paragraph>
    </Blockquote>
  </Box>
);

export const borderStyling = () => (
  <Blockquote borderColor="primary">
    <Paragraph>"Out here, survival is the name of the game. Only it's not a game; it's deadly serious."</Paragraph>
    <Paragraph>- Russell Coight</Paragraph>
  </Blockquote>
);
