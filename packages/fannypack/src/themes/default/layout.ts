// @ts-ignore
import _get from 'lodash/get';

import { space } from '../../styled';

export default (overrides: any) => ({
  gapFactor: space(2),
  mobileBreakpoint: 480,
  tabletBreakpoint: 768,
  desktopBreakpoint: 1024,
  widescreenBreakpoint: 1200,
  fullHDBreakpoint: 1440,
  minorUnit: 4,
  majorUnit: 8,
  ..._get(overrides, 'layout', {})
});
