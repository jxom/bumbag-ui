import * as React from 'react';
import { withTheme } from '../../styled';
import { Box, Flex } from '../../primitives';
import Pane from '../../Pane';
import Text from '../../Text';

export type PaletteColorProps = {
  palette: string;
  theme: { palette: any };
};

const PaletteColor: React.FunctionComponent<PaletteColorProps> = ({ palette, theme, ...props }) => {
  return (
    <Pane border="shadow">
      <Flex flexDirection="column">
        <Box borderRadius="2px" height="60px" backgroundColor={theme.palette[palette]} width="180px" {...props} />
        <Box padding="minor-2" lineHeight="1">
          <Text fontSize="small" marginBottom="minor-1">
            {palette}
          </Text>
          <br />
          <Text color="text100" fontSize="small">
            {theme.palette[palette]}
          </Text>
        </Box>
      </Flex>
    </Pane>
  );
};

export default withTheme(PaletteColor);
