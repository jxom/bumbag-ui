import * as React from 'react';
import { getMediaQueryList } from './getMediaQueryList';

import { useTheme } from './useTheme';

export function useBreakpointValue(breakpointValueMap) {
  const { theme } = useTheme();

  const [matchedBreakpoints, setMatchedBreakpoints] = React.useState([]);

  const initialMatchedBreakpoints = Object.entries(breakpointValueMap)
    .map(([breakpoint, value]) => {
      if (breakpoint === 'default') return null;
      const onMediaChange = (e) => {
        if (e.matches) {
          setMatchedBreakpoints((matchedBreakpoints) => [
            ...matchedBreakpoints,
            { breakpoint, value, mediaQueryList: e },
          ]);
        } else {
          setMatchedBreakpoints((matchedBreakpoints) =>
            matchedBreakpoints.filter((matchedBreakpoint) => matchedBreakpoint.breakpoint !== breakpoint)
          );
        }
      };
      const mediaQueryList = getMediaQueryList(breakpoint, theme);
      return { breakpoint, value, mediaQueryList, onMediaChange };
    })
    .filter(Boolean);

  React.useEffect(() => {
    initialMatchedBreakpoints.forEach((item) => {
      item.mediaQueryList.addListener(item.onMediaChange);
    });
    return function cleanup() {
      initialMatchedBreakpoints.forEach((item) => {
        item.mediaQueryList.removeListener(item.onMediaChange);
      });
    };
  }, [initialMatchedBreakpoints]);

  const matches = matchedBreakpoints.length > 0 ? matchedBreakpoints : initialMatchedBreakpoints;
  const value = React.useMemo(
    () => matches.find((item) => item.mediaQueryList.matches)?.value || breakpointValueMap['default'],
    [breakpointValueMap, matches]
  );

  return value;
}
