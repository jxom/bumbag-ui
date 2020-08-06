import capsize from 'capsize';

type CapsizeOpts = {
  fontSize?: string;
  lineHeight?: string;
};

export function getCapsizeStyles(opts?: CapsizeOpts): any {
  const { fontSize = '200', lineHeight = 'default' } = opts;
  return ({ theme }) => {
    const fontSizeInPx = theme.fontSizes[fontSize] * theme.global.fontSize;
    return capsize({
      fontMetrics: theme.fontMetrics.default,
      fontSize: fontSizeInPx,
      leading: fontSizeInPx * theme.lineHeights[lineHeight],
    });
  };
}
