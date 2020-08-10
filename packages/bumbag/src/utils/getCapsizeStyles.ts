import capsize from 'capsize';
import { get } from './get';
import { css } from '../styled';

type CapsizeOpts = {
  includeBottomGap?: boolean;
  lineHeight?: string;
  shrink?: boolean;
  themeKey?: string;
};

export function getCapsizeAttributes(opts?: CapsizeOpts) {
  return ({ theme, ...props }) => {
    const shrinkScale = opts.shrink ? get(theme, `${opts.themeKey}.shrinkScale`) || 1 : 1;
    const fontMetrics = props.fontMetrics || theme.fontMetrics?.default || {};
    const fontSize = props.fontSize || get(theme, `${opts.themeKey}.fontSize`) || '200';
    const lineHeight = props.lineHeight || opts.lineHeight || 'default';
    const fontSizeInPx = shrinkScale * theme.fontSizes?.[fontSize] * theme.global?.fontSize;
    const leading = fontSizeInPx * theme.lineHeights?.[lineHeight];
    return {
      fontMetrics,
      lineHeight,
      fontSize: fontSizeInPx,
      leading,
    };
  };
}

export function getLineGapInPx(opts?: any): any {
  return (props) => {
    const { fontMetrics, fontSize, leading } = getCapsizeAttributes(opts)(props);
    const capHeight = fontSize * (fontMetrics.capHeight / fontMetrics.unitsPerEm);
    const lineGap = leading - capHeight;
    return lineGap;
  };
}

export function getCapsizeStyles(opts?: CapsizeOpts): any {
  return (props) => {
    const { fontMetrics = {}, fontSize, leading } = getCapsizeAttributes(opts)(props);
    // @ts-ignore
    return css`
      ${capsize({
        fontMetrics,
        fontSize,
        leading,
      })}

      ${opts.includeBottomGap &&
      css`
        &:not(:last-child) {
          margin-bottom: ${getLineGapInPx(opts)(props)}px;
        }

        ${opts.lineHeight === 'heading' &&
        css`
          &:last-of-type:not(:last-child) {
            margin-bottom: ${1.5 * getLineGapInPx(opts)(props)}px;
          }
        `}
      `}
    `;
  };
}
