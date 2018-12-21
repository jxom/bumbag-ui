// @ts-ignore
import _get from 'lodash/get';
import { ThemeConfig } from '../types';

export default (_scale: number | string | void) => (props: { theme: { fannypack: ThemeConfig } }) => {
  let scale = _scale;
  if (!scale) return 0;
  if (typeof scale === 'string') {
    if (!scale.includes('x')) return 0;
    scale = parseFloat(scale.replace('x', ''));
  }
  if (isNaN(scale)) return 0;
  const unit: number = _get(props, 'theme.fannypack.layout.spacingUnit');
  const fontSize: number = _get(props, 'theme.fannypack.global.fontSize');
  return (scale as number) * (unit / fontSize);
};
