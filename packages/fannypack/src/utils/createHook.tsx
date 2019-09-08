import * as React from 'react';
import _get from 'lodash/get';
import _merge from 'lodash/merge';

import { useDefaultProps } from './useDefaultProps';

export function createHook<P>(
  useHook: (props: Partial<P>, themeKey: string) => Partial<P>,
  config: { themeKey: string }
) {
  return (props: Partial<P>, { themeKey: themeKeyOverride = undefined } = {}) => {
    const themeKey = themeKeyOverride || _get(config, 'themeKey');
    const { props: newProps, themeKey: newThemeKey } = useDefaultProps(props, { themeKey });
    return useHook(newProps, newThemeKey);
  };
}
