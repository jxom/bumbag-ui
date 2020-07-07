import * as React from 'react';
import { useLocation, useNavigate } from '@reach/router';
import { Box, Select, useColorMode } from 'fannypack';

export default function ColorModePicker(props) {
  const { colorMode, setColorMode } = useColorMode();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeTheme = React.useCallback(
    (e) => {
      const colorMode = e.target.value;
      setColorMode(colorMode);
    },
    [setColorMode]
  );

  return (
    <Box>
      <Select
        size="small"
        fontWeight="normal"
        onChange={handleChangeTheme}
        options={[
          { key: 'default', label: 'Mode: Default', value: 'default' },
          { key: 'dark', label: 'Mode: Dark', value: 'dark' },
        ]}
        value={colorMode}
      />
    </Box>
  );
}
