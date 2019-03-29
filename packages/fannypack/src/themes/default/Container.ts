// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  fluidMargin: '0 2rem',
  tabletMargin: '0 1rem',
  ..._get(overrides, 'Container', {})
});
