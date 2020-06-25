import * as React from 'react';
import _merge from 'lodash/merge';
import _get from 'lodash/get';

import { omitBy } from './omitBy';
import { useTheme } from './useTheme';

const isUndefined = (val) => typeof val === 'undefined';

export function useDefaultProps(props: any = {}, config: any = {}) {
  const { themeKey } = config;
  const { theme } = useTheme();
  const configDefaultProps = omitBy(config?.defaultProps ?? {}, isUndefined);
  const themeDefaultProps = omitBy(_get(theme, `${themeKey}.defaultProps`, {}), isUndefined);
  const themeVariantDefaultProps = omitBy(
    _get(theme, `${themeKey}.variants.${props.variant}.defaultProps`, {}),
    isUndefined
  );
  const overridesDefaultProps = omitBy(_get(props, `overrides.${themeKey}.defaultProps`, {}), isUndefined);
  const newProps = {
    ...configDefaultProps,
    ...themeDefaultProps,
    ...themeVariantDefaultProps,
    ...overridesDefaultProps,
    ...omitBy(props, isUndefined),
  };
  return { props: newProps, themeKey };
}
