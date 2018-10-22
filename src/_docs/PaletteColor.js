// @flow
import React from 'react';
import { withTheme } from 'reakit/styled';
import { Box, Flex } from '../primitives';
import Code from '../Code';

type Props = {
  palette: string,
  theme: Object
};

const PaletteColor = ({ palette, theme, ...props }: Props) => {
  return (
    <Flex column alignItems="center">
      <Box marginBottom="1rem">
        <Code>{palette}</Code>
      </Box>
      <Box height="40px" borderRadius="4px" backgroundColor={theme.palette[palette]} width="180px" {...props} />
    </Flex>
  );
};

export default withTheme(PaletteColor);
