import * as React from 'react';
import _get from 'lodash-es/get';
import _merge from 'lodash-es/merge';
import _omit from 'lodash-es/omit';

import { useDefaultProps } from './useDefaultProps';

export function createHook<P>(
  useHook: (props: Partial<P>, options: { themeKey: string; themeKeyOverride: string }) => Partial<P>,
  config?: { defaultProps?: Partial<P>; themeKey?: string }
) {
  return (props: Partial<P>, { themeKey: themeKeyOverride = undefined } = {}) => {
    const themeKey = themeKeyOverride || _get(props, 'themeKey') || _get(config, 'themeKey');
    const { props: newProps, themeKey: newThemeKey } = useDefaultProps(props, { ...config, themeKey });
    return useHook(_omit(newProps, 'themeKey'), { themeKey: _get(config, 'themeKey'), themeKeyOverride: newThemeKey });
  };
}
