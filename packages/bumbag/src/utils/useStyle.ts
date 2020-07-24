import * as React from 'react';

import { pickCSSProps } from './cssProps';
import { getCSSFromStyleObject } from './getCSSFromStyleObject';
import { useColorMode } from './useColorMode';
import { useTheme } from './useTheme';

export function useStyle(props) {
  const { theme } = useTheme();
  const { colorMode: globalColorMode } = useColorMode();
  const cssProps = pickCSSProps(props);
  const colorMode = props.colorMode || globalColorMode;
  return React.useMemo(() => getCSSFromStyleObject(cssProps, theme, colorMode, { fromProps: true }), [
    cssProps,
    theme,
    colorMode,
  ]);
}
