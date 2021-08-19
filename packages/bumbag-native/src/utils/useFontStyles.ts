import * as React from 'react';
import { useTheme } from 'bumbag/utils/useTheme';

import { getFontAttributes } from './getFontStyles';

export function useFontStyles({ fontWeight: _fontWeight, fontFamily: fontFamilyThemeKey = 'default' }) {
  const { theme } = useTheme();

  return React.useMemo(() => {
    return getFontAttributes({ fontFamilyThemeKey, fontWeight: _fontWeight, theme });
  }, [_fontWeight, fontFamilyThemeKey, theme]);
}
