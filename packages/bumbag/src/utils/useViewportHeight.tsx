import * as React from 'react';
import { debounceAnimationFrame } from './debounceAnimationFrame';

export function useViewportHeight({ enabled }) {
  const [viewportHeightValue, setViewportHeightValue] = React.useState('100vh');
  React.useEffect(() => {
    if (typeof window !== 'undefined' && enabled) {
      const setHeight = debounceAnimationFrame(() => {
        let vh = window.innerHeight;
        setViewportHeightValue(`${vh}px`);
      });
      setHeight();
      window.addEventListener('resize', setHeight, { passive: true });
      return () => window.removeEventListener('resize', setHeight);
    }
  }, [enabled]);
  return viewportHeightValue;
}
