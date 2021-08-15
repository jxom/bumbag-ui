import { font, fontWeight as getFontWeight } from './theme';

export function getFontStyles({ fontWeight: _fontWeight }) {
  return (props) => {
    const fontFamilyThemeKey = props.font || 'default';
    const fontWeight = getFontWeight({ fontFamily: fontFamilyThemeKey, fontWeight: _fontWeight })(props);
    const fontFamily = font(fontFamilyThemeKey)(props);

    if (typeof fontWeight === 'object') {
      const newFontFamily = `${fontFamily}-${fontWeight.fontFamilySuffix}`;
      const newFontWeight = fontWeight.fontWeight;
      return `
        font-family: ${newFontFamily};
        font-weight: ${newFontWeight};
      `;
    }

    return `
      font-weight: ${fontWeight};
    `;
  };
}
