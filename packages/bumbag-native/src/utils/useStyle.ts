import * as React from 'react';

import { useColorMode } from 'bumbag/ColorMode';
import { pickCSSProps } from 'bumbag/utils/cssProps';
import { useTheme } from 'bumbag/utils/useTheme';
import { getCSSFromStyleObject } from './getCSSFromStyleObject';

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
