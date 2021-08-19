import * as React from 'react';
import { Box, Button, Icon, useColorMode } from 'bumbag';

export default function ColorModePicker() {
  const { colorMode, setColorMode } = useColorMode();

  const handleChangeTheme = React.useCallback(
    (e) => {
      const colorMode = e.target.value;
      setColorMode(colorMode);
    },
    [setColorMode]
  );

  return (
    <Box>
      {colorMode === 'default' && (
        <Button onClick={() => setColorMode('dark')} color="gray" variant="ghost">
          <Icon icon="solid-moon" />
        </Button>
      )}
      {colorMode === 'dark' && (
        <Button onClick={() => setColorMode('default')} color="text" variant="ghost">
          <Icon icon="solid-sun" />
        </Button>
      )}
    </Box>
  );
}
