// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  ..._get(overrides, 'Pane', {}),
  elevations: {
    100: 4,
    200: 8,
    300: 12,
    400: 24,
    ..._get(overrides, 'Pane.elevations', {})
  }
});
