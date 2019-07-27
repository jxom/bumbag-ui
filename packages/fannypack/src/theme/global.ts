// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  ..._get(overrides, 'global', {})
});
