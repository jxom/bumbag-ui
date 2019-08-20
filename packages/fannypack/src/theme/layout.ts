// @ts-ignore
import _get from 'lodash/get';

import { LayoutThemeConfig } from '../types';
import { space } from '../utils';

export default (overrides: LayoutThemeConfig) => ({
  gapUnit: space(2),
  minorUnit: 4,
  majorUnit: 8,
  ...overrides
});
