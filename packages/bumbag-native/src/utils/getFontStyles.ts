import { font, fontWeight as getFontWeight } from './theme';

export function getFontStyles({ fontWeight: _fontWeight, fontFamily: _fontFamilyThemeKey = 'default' }) {
  return (props) => {
    const fontFamilyThemeKey = props.font || _fontFamilyThemeKey;
    const fontWeight = getFontWeight({ fontFamily: fontFamilyThemeKey, fontWeight: _fontWeight })(props);
    const fontFamily = font(fontFamilyThemeKey)(props);

    if (typeof fontWeight === 'object') {
      const newFontFamily = `${fontFamily}${fontWeight.fontFamilySuffix ? `-${fontWeight.fontFamilySuffix}` : ''}`;
      const newFontWeight = fontWeight.fontWeight || 'normal';
      return `
        font-family: ${newFontFamily};
        font-weight: ${newFontWeight};
      `;
    }

    return `
      ${fontFamily ? `font-family: ${fontFamily};` : ''}
      font-weight: ${fontWeight};
    `;
  };
}
