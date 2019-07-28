import * as React from 'react';
import _get from 'lodash/get';

import { ThemeContext, space } from '../styled';

import { pickCSSProps } from './pickCSSProps';

const colorAttributes = [
  'color',
  'backgroundColor',
  'borderBlockEndColor',
  'borderBlockStartColor',
  'borderBottomColor',
  'borderColor',
  'borderInlineEndColor',
  'borderInline-startColor',
  'borderLeftColor',
  'borderRightColor',
  'borderTopColor',
  'borderBottomColor',
  'caretColor',
  'columnRuleColor',
  'outlineColor',
  'text-decorationColor',
  'textEmphasisColor'
];
const spaceAttributes = [
  'margin',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'padding',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'top',
  'left',
  'bottom',
  'right'
];
const fontSizeAttributes = ['fontSize'];
const fontWeightAttributes = ['fontWeight'];

function getColorValue({ theme, value }) {
  const color = _get(theme, `palette.${value}`);
  if (color) {
    return color;
  }
  return value;
}

function getSpaceValue({ theme, value }) {
  const spacing = space(value)({ theme });
  if (spacing) {
    return `${spacing}rem`;
  }
  return value;
}

function getFontSizeValue({ theme, value }) {
  const fontSize = _get(theme, `fontSizes.${value}`);
  if (fontSize) {
    return `${fontSize}rem`;
  }
  return value;
}

function getFontWeightValue({ theme, value }) {
  const fontWeight = _get(theme, `fontWeights.${value}`);
  if (fontWeight) {
    return fontWeight;
  }
  return value;
}

export function useStyle(props) {
  const theme = React.useContext(ThemeContext);
  const cssProps = pickCSSProps(props);
  let styleProps = { ...cssProps };
  if (styleProps) {
    styleProps = Object.entries(styleProps).reduce((prevStyleProps, [attribute, value]) => {
      let newValue = value;
      if (colorAttributes.includes(attribute)) {
        newValue = getColorValue({ theme, value });
      }
      if (spaceAttributes.includes(attribute)) {
        newValue = getSpaceValue({ theme, value });
      }
      if (fontSizeAttributes.includes(attribute)) {
        newValue = getFontSizeValue({ theme, value });
      }
      if (fontWeightAttributes.includes(attribute)) {
        newValue = getFontWeightValue({ theme, value });
      }
      return { ...prevStyleProps, [attribute]: newValue };
    }, styleProps);
  }
  return styleProps;
}
