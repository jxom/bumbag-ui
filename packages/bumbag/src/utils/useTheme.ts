import * as React from 'react';
import { BumbagThemeContext } from '../Provider/ThemeContext';
import { ThemeContext as EmotionContext } from '../styled';

export function useTheme() {
  const { isSSR, setTheme } = React.useContext(BumbagThemeContext);
  const theme = React.useContext(EmotionContext);
  return { isSSR, theme, setTheme } as any;
}
