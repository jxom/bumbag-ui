// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  spacing: 'major-4',
  ..._get(overrides, 'LayoutSet', {})
});
