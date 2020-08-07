import capsize from 'capsize';

type CapsizeOpts = {
  fontSize?: string;
  lineHeight?: string;
};

export function getCapsizeStyles(opts?: CapsizeOpts): any {
  return ({ theme, ...props }) => {
    const fontSize = props.fontSize || opts.fontSize || '200';
    const lineHeight = props.lineHeight || opts.lineHeight || 'default';
    const fontSizeInPx = theme.fontSizes[fontSize] * theme.global.fontSize;
    return capsize({
      fontMetrics: theme.fontMetrics.default,
      fontSize: fontSizeInPx,
      leading: fontSizeInPx * theme.lineHeights[lineHeight],
    });
  };
}
