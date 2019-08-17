// @ts-ignore
import _get from 'lodash/get';

import { LayoutThemeConfig } from '../types';

export default (overrides: LayoutThemeConfig) => ({
  gapFactor: 8,
  minorUnit: 4,
  majorUnit: 8,
  ...overrides
});
