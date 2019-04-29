// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  fluidMargin: '2rem',
  tabletMargin: '1rem',
  ..._get(overrides, 'Container', {})
});
