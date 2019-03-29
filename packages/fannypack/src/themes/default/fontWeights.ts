// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  normal: 400,
  semibold: 600,
  bold: 700,
  ..._get(overrides, 'fontWeights', {})
});
