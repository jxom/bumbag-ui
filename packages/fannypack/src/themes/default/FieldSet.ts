// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  spacing: 'major-3',
  ..._get(overrides, 'FieldSet', {})
});
