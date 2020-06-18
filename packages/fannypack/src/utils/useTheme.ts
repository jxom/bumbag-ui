import * as React from 'react';
import { ThemeContext } from '../styled';

export function useTheme() {
  const theme = React.useContext(ThemeContext);
  return theme as any;
}
