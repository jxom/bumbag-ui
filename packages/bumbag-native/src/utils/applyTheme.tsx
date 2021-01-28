import * as React from 'react';
import _set from 'lodash/set';

export function applyTheme<ThemeConfig, ComponentType>(Comp: ComponentType, theme: ThemeConfig) {
  const Component = React.forwardRef(function (props: any, ref) {
    // @ts-ignore
    const newOverrides = _set(props.overrides || {}, Comp.displayName, theme);
    // @ts-ignore
    return <Comp {...props} ref={ref} overrides={newOverrides} />;
  });
  return Object.assign({ ...Comp }, Component) as ComponentType;
}
