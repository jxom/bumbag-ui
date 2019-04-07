// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  logoPath: 'logo.svg',
  ..._get(overrides, '_docs', {})
});
