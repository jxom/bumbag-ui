import * as React from 'react';
import { FannypackThemeContext } from '../Provider/ThemeContext';
import { ThemeContext as EmotionContext } from '../styled';

export function useTheme() {
  const { setTheme } = React.useContext(FannypackThemeContext);
  const theme = React.useContext(EmotionContext);
  return { theme, setTheme } as any;
}
