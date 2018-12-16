import * as React from 'react';
import { withTheme } from '../../styled';
import { Box, Flex } from '../../primitives';
import Code from '../../Code';

export type PaletteColorProps = {
  palette: string;
  theme: { palette: any };
};

const PaletteColor: React.FunctionComponent<PaletteColorProps> = ({ palette, theme, ...props }) => {
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
