// @ts-ignore
import _get from 'lodash/get';
import { ThemeConfig } from '../types';

export default (_scalar: number | string | void, _scaleType: 'minor' | 'major' = 'minor') => (props: {
  theme: { fannypack: ThemeConfig };
}) => {
  let scalar = _scalar;
  let scaleType = _scaleType;
  if (!scalar) return 0;
  if (typeof scalar === 'string' && (scalar.includes('minor') || scalar.includes('major'))) {
    // @ts-ignore
    [scaleType, scalar] = scalar.split('-');
    scalar = parseFloat(scalar);
    if (isNaN(scalar)) return 0;
  }
  const unit: number = _get(props, `theme.fannypack.layout.${scaleType}Unit`);
  const fontSize: number = _get(props, 'theme.fannypack.global.fontSize');
  return (scalar as number) * (unit / fontSize);
};
