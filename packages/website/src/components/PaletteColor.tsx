import React from 'react';
import { Box, Button, Flex, Text, useTheme } from 'fannypack';

const PaletteColor = ({ palette, ...props }: any) => {
  const { theme } = useTheme();

  return (
    <Box border="default" borderColor="white800">
      <Flex flexDirection="column">
        <Box borderRadius="2px" height="60px" backgroundColor={palette} width="180px" {...props} />
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
