import React from 'react';
import { Box, Flex, Pane, Text, withTheme } from 'fannypack';

const PaletteColor = ({ palette, theme, ...props }) => {
  return (
    <Pane border="shadow">
      <Flex flexDirection="column">
        <Box borderRadius="2px" height="60px" backgroundColor={theme.palette[palette]} width="180px" {...props} />
        <Box padding="minor-2" lineHeight="1">
          <Text fontSize="150" marginBottom="minor-1">
            {palette}
          </Text>
          <br />
          <Text color="text100" fontSize="100">
            {theme.palette[palette]}
          </Text>
        </Box>
      </Flex>
    </Pane>
  );
};

export default withTheme(PaletteColor);
