import * as React from 'react';
import _set from 'lodash/set';

export function applyTheme<ThemeConfig>(Comp: React.FunctionComponent<any>, theme: ThemeConfig) {
  return function <Props>(props: Props) {
    // @ts-ignore
    const newOverrides = _set(props.overrides || {}, Comp.displayName, theme);
    return <Comp {...props} overrides={newOverrides} />;
  };
}
