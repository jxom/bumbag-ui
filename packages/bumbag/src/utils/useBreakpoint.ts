import * as React from 'react';
import { getMediaQueryList } from './getMediaQueryList';

import { useTheme } from './useTheme';

export function useBreakpoint(breakpoint) {
  const { theme } = useTheme();

  const [doesMatch, setDoesMatch] = React.useState(undefined);

  React.useEffect(() => {
    let mounted = true;

    const mediaQueryList = getMediaQueryList(breakpoint, theme);
    setDoesMatch(mediaQueryList.matches);

    const onMediaChange = (e) => {
      if (!mounted) return;
      setDoesMatch(e.matches);
    };

    mediaQueryList.addListener(onMediaChange);
    return function cleanup() {
      mounted = false;
      mediaQueryList.removeListener(onMediaChange);
    };
  }, [breakpoint, theme]);

  return doesMatch;
}
