import React from 'react';
import { Box, Button, Flex, Text, useTheme, useColorMode } from 'bumbag';

const PaletteColor = ({ palette, ...props }: any) => {
  const { theme } = useTheme();
  const { colorMode } = useColorMode();

  const colorModePalette =
    colorMode === 'dark' && theme.palette.modes.dark[palette]
      ? theme.palette.modes.dark[palette]
      : theme.palette[palette];

  return (
    <Box border="default" borderColor="white800">
      <Flex flexDirection="column">
        <Box
          height="60px"
          backgroundColor={colorModePalette}
          width="100%"
          {...props}
        />
        <Box padding="minor-2" lineHeight="none">
          <Text fontSize="150" marginBottom="minor-1">
            {palette}
          </Text>
          <br />
          <Text color="text100" fontSize="100">
            {colorModePalette}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default PaletteColor;
