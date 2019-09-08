import * as React from 'react';
import _get from 'lodash/get';
import _merge from 'lodash/merge';

import { ThemeContext } from '../styled';

export function useDefaultProps(props, config) {
  const { themeKey } = config;
  const theme = React.useContext(ThemeContext);
  const defaultProps = _get(theme, `${themeKey}.defaultProps`, {});
  const newProps = { ..._get(config, 'defaultProps', {}), ...defaultProps, ...props };
  return { props: newProps, themeKey };
}
