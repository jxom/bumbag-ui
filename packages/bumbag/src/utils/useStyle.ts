import * as React from 'react';

import { useColorMode } from '../ColorMode';
import { pickCSSProps } from './cssProps';
import { getCSSFromStyleObject } from './getCSSFromStyleObject';
import { useTheme } from './useTheme';

export function useStyle(props, { disableCSSProps }) {
  const { theme } = useTheme();
  const { colorMode: globalColorMode } = useColorMode();
  const cssProps = pickCSSProps(props);
  const colorMode = props.colorMode || globalColorMode;
  return React.useMemo(() => getCSSFromStyleObject(cssProps, theme, colorMode, { fromProps: true, disableCSSProps }), [
    cssProps,
    theme,
    colorMode,
    disableCSSProps,
  ]);
}
