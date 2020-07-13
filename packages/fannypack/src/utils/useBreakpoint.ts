import * as React from 'react';

import { useTheme } from './useTheme';

export function useBreakpoint(_breakpoint) {
  const { theme } = useTheme();

  const minBreakpointValues: { [key: string]: number } = {
    mobile: 0,
    tablet: theme?.breakpoints?.mobile,
    desktop: theme?.breakpoints?.tablet,
    widescreen: theme?.breakpoints?.desktop,
    fullHD: theme?.breakpoints?.widescreen,
  };

  let breakpoint = _breakpoint;
  let key;
  if (breakpoint.includes('min')) {
    breakpoint = breakpoint.replace('min-', '');
    key = 'min-width';
  } else if (breakpoint.includes('max')) {
    breakpoint = breakpoint.replace('max-', '');
    key = 'max-width';
  }

  const breakpointValue = key === 'min-width' ? minBreakpointValues[breakpoint] : theme?.breakpoints?.[breakpoint];

  let query = key
    ? `(${key}: ${key === 'min-width' ? breakpointValue : breakpointValue - 1}px)`
    : `(min-width: ${minBreakpointValues[breakpoint]}px) and (max-width: ${breakpointValue - 1}px)`;

  const mediaQueryList =
    typeof window !== 'undefined'
      ? window.matchMedia(query)
      : { matches: false, addListener: () => null, removeListener: () => null };
  const [doesMatch, setDoesMatch] = React.useState(mediaQueryList.matches);

  React.useEffect(() => {
    let mounted = true;

    const onMediaChange = (e) => {
      if (!mounted) return;
      setDoesMatch(e.matches);
    };

    mediaQueryList.addListener(onMediaChange);
    return function cleanup() {
      mounted = false;
      mediaQueryList.removeListener(onMediaChange);
    };
  }, [mediaQueryList]);

  return doesMatch;
}
