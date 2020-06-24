import * as React from 'react';
import { useLocation, useNavigate } from '@reach/router';
import { Box, Select, useTheme } from 'fannypack';

import { themeMap } from '../utils/theme';

export default function ThemePicker(props) {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeTheme = React.useCallback(
    (e) => {
      const themeName = e.target.value;
      setTheme(themeMap[themeName]);
      navigate(`${location.pathname}?theme=${themeName}`);
    },
    [location.pathname, navigate, setTheme]
  );

  return (
    <Box>
      <Select
        size="small"
        fontWeight="normal"
        onChange={handleChangeTheme}
        options={[
          { key: 'default', label: 'Theme: Default', value: 'default' },
          { key: 'medipass', label: 'Theme: Medipass', value: 'medipass' },
        ]}
        value={theme.name}
      />
    </Box>
  );
}
