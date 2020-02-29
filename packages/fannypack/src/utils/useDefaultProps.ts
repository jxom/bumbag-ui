import * as React from 'react';
import _get from 'lodash/get';
import _merge from 'lodash/merge';
import _omitBy from 'lodash/omitBy';
import _isUndefined from 'lodash/isUndefined';

import { ThemeContext } from '../styled';

export function useDefaultProps(props, config) {
  const { themeKey } = config;
  const theme = React.useContext(ThemeContext);
  const configDefaultProps = _omitBy(_get(config, 'defaultProps', {}), _isUndefined);
  const themeDefaultProps = _omitBy(_get(theme, `${themeKey}.defaultProps`, {}), _isUndefined);
  const overridesDefaultProps = _omitBy(_get(props, `overrides.${themeKey}.defaultProps`, {}), _isUndefined);
  const newProps = {
    ...configDefaultProps,
    ...themeDefaultProps,
    ...overridesDefaultProps,
    ..._omitBy(props, _isUndefined)
  };
  return { props: newProps, themeKey };
}
