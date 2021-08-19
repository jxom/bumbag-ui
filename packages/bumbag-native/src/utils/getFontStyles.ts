import { font, fontWeight as getFontWeight } from './theme';

export function getFontAttributes({ fontFamilyThemeKey, fontWeight: _fontWeight, theme }) {
  let fontWeight = getFontWeight({ fontFamily: fontFamilyThemeKey, fontWeight: _fontWeight })({ theme });
  let fontFamily = font(fontFamilyThemeKey)({ theme });

  if (typeof fontWeight === 'object') {
    fontFamily = `${fontFamily}${fontWeight.fontFamilySuffix ? `-${fontWeight.fontFamilySuffix}` : ''}`;
    fontWeight = fontWeight.fontWeight || 'normal';
  }

  return {
    fontFamily,
    fontWeight,
  };
}

export function getFontStyles({ fontWeight: _fontWeight, fontFamily: _fontFamilyThemeKey = 'default' }) {
  return ({ theme, ...props }) => {
    const fontFamilyThemeKey = props.font || props.fontFamily || _fontFamilyThemeKey;

    const { fontFamily, fontWeight } = getFontAttributes({ fontFamilyThemeKey, fontWeight: _fontWeight, theme });

    return `
      ${fontFamily ? `font-family: ${fontFamily};` : ''}
      font-weight: ${fontWeight};
    `;
  };
}
