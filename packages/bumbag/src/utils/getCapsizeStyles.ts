import capsize from 'capsize';
import { css } from '../styled';

type CapsizeOpts = {
  includeBottomGap?: boolean;
  fontMetrics?: any;
  fontSize?: string;
  lineHeight?: string;
};

export function getCapsizeAttributes(opts?: CapsizeOpts) {
  return ({ theme, ...props }) => {
    const fontMetrics = props.fontMetrics || opts.fontMetrics || theme.fontMetrics.default;
    const fontSize = props.fontSize || opts.fontSize || '200';
    const lineHeight = props.lineHeight || opts.lineHeight || 'default';
    const fontSizeInPx = theme.fontSizes[fontSize] * theme.global.fontSize;
    const leading = fontSizeInPx * theme.lineHeights[lineHeight];
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
    const { fontMetrics, fontSize, leading } = getCapsizeAttributes(opts)(props);
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
          &:last-of-type {
            margin-bottom: ${1.5 * getLineGapInPx(opts)(props)}px;
          }
        `}
      `}
    `;
  };
}
