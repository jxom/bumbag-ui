import capsize from 'capsize';
import { get } from './get';
import { breakpoint } from './theme';
import { css } from '../styled';

type CapsizeOpts = {
  fontFamily?: string;
  fontSize?: string;
  includeBottomGap?: boolean;
  lineHeight?: string;
  shrink?: boolean;
  themeKey?: string;
};

export function getCapsizeAttributes(opts?: CapsizeOpts) {
  return ({ theme, ...props }) => {
    const shrinkScale = opts.shrink ? get(theme, `${opts.themeKey}.shrinkScale`) || 1 : 1;
    const fontFamily = props.font || props.fontFamily || opts.fontFamily;
    const fontMetrics =
      props.fontMetrics || get(theme, `fontMetrics.${fontFamily}`) || theme.fontMetrics?.default || {};
    const lineHeight = props.lineHeight || opts.lineHeight || 'default';
    const lineHeightScale = theme.lineHeights?.[lineHeight];
    const fontSizeInPx = shrinkScale * theme.fontSizes?.[opts.fontSize] * theme.global?.fontSize;
    const leading = fontSizeInPx * lineHeightScale;
    const capHeight = fontSizeInPx * (fontMetrics.capHeight / fontMetrics.unitsPerEm);
    const lineGap = leading - capHeight;
    return {
      fontMetrics,
      lineHeight,
      lineHeightScale,
      lineGap,
      fontSizeInPx,
      leading,
    };
  };
}

export function getFontSize(opts?: any) {
  return (props): { [key: string]: string } => {
    let fontSize = props.fontSize || opts.fontSize || get(props, `theme.${opts.themeKey}.fontSize`) || '200';
    if (typeof fontSize === 'string') {
      fontSize = { default: fontSize };
    }
    return fontSize;
  };
}

export function getCapsizeStyles(opts?: CapsizeOpts): any {
  return (props) => {
    // We want to cater for responsive `fontSize` CSS props, so let's
    // transform fontSize in the shape of a responsive CSS prop.
    const fontSize = getFontSize(opts)(props);

    // If a responsive `fontSize` CSS prop exists, then ignore the shrinked variant...
    if (opts.shrink && Object.keys(fontSize).length > 1) return {};

    // For each fontSize on the breakpoint, we want to apply Capsize.
    return Object.entries(fontSize).reduce((currentStyles, [bp, fontSize]) => {
      const { fontMetrics = {}, fontSizeInPx, leading, lineGap, lineHeightScale } = getCapsizeAttributes({
        ...opts,
        fontSize,
      })(props);

      // @ts-ignore
      const styles = (fontSize) => css`
        ${capsize({
          fontMetrics,
          fontSize: fontSizeInPx,
          leading,
        })}

        ${opts.includeBottomGap &&
        css`
          &:not(:last-child) {
            margin-bottom: ${lineGap}px;
          }

          ${opts.lineHeight === 'heading' &&
          css`
            &:last-of-type:not(:last-child) {
              margin-bottom: ${lineHeightScale * lineGap}px;
            }
          `}
        `}
      `;
      return css`
        ${currentStyles}
        ${bp === 'default'
          ? styles(fontSize)
          : // @ts-ignore
            css`
              ${breakpoint(bp, styles(fontSize))(props)};
            `};
      `;
    }, css``);
  };
}
