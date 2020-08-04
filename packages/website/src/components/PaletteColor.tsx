import React from 'react';
import { Box, Button, Flex, Text, useTheme } from 'bumbag';

const PaletteColor = ({ palette, ...props }: any) => {
  const { theme } = useTheme();

  return (
    <Box border="default" borderColor="white800">
      <Flex flexDirection="column">
        <Box height="60px" backgroundColor={palette} width="100%" {...props} />
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
    </Box>
  );
};

export default PaletteColor;
