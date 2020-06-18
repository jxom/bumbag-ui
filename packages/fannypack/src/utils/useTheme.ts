import * as React from 'react';
import { ThemeConfig } from '../types/theme';
import { ThemeContext } from '../styled';

export function useTheme() {
  const theme = React.useContext(ThemeContext);
  return theme as ThemeConfig;
}
