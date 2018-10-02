// @flow
import React from 'react';
import { withTheme } from 'reakit/styled';
import { Box, Flex } from '../primitives';
import Text from '../Text';

type Props = {
  palette: string,
  theme: Object
};

const PaletteColor = ({ palette, theme, ...props }: Props) => {
  return (
    <Flex column alignItems="center">
      <Box marginBottom="1rem">
        <Text as="code">{palette}</Text>
      </Box>
      <Box height="150px" borderRadius="4px" backgroundColor={theme.palette[palette]} width="150px" {...props} />
    </Flex>
  );
};

export default withTheme(PaletteColor);
