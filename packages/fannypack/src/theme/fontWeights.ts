// @ts-ignore
import _get from 'lodash/get';
import { FontWeightsThemeConfig } from '../types';

export default (overrides: FontWeightsThemeConfig) => ({
  normal: 400,
  semibold: 600,
  bold: 700,
  ...overrides
});
