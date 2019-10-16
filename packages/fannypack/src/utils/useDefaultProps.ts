import * as React from 'react';
import _get from 'lodash/get';
import _merge from 'lodash/merge';

import { ThemeContext } from '../styled';

export function useDefaultProps(props, config) {
  const { themeKey } = config;
  const theme = React.useContext(ThemeContext);
  const configDefaultProps = _get(config, 'defaultProps', {});
  const themeDefaultProps = _get(theme, `${themeKey}.defaultProps`, {});
  const overridesDefaultProps = _get(props, `overrides.${themeKey}.defaultProps`, {});
  const newProps = { ...configDefaultProps, ...themeDefaultProps, ...overridesDefaultProps, ...props };
  return { props: newProps, themeKey };
}
