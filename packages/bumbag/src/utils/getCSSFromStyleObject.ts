import _kebabCase from 'lodash/kebabCase';

import { css } from '../styled';
import {
  border,
  borderRadius,
  breakpoint,
  font,
  fontSize,
  lineHeight,
  palette,
  space,
  fontWeight,
  letterSpacing,
} from './theme';

import { cssProps as cssPropsMap } from './cssProps';

const borderAttributes = ['border'];
const borderRadiusAttributes = ['borderRadius'];
const colorAttributes = [
  'color',
  'backgroundColor',
  'borderBlockEndColor',
  'borderBlockStartColor',
  'borderBottomColor',
  'borderColor',
  'borderInlineEndColor',
  'borderInlineStartColor',
  'borderLeftColor',
  'borderRightColor',
  'borderTopColor',
  'borderBottomColor',
  'caretColor',
  'columnRuleColor',
  'outlineColor',
  'textDecorationColor',
  'textEmphasisColor',
];
const spaceAttributes = [
  'margin',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'marginX',
  'marginY',
  'padding',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'paddingX',
  'paddingY',
  'top',
  'left',
  'bottom',
  'right',
  'grid-gap',
  'grid-column-gap',
  'grid-row-gap',
];
const fontAttributes = ['font', 'fontFamily'];
const fontSizeAttributes = ['fontSize'];
const fontWeightAttributes = ['fontWeight'];
const lineHeightAttributes = ['lineHeight'];
const letterSpacingAttributes = ['letterSpacing'];

const attributeMaps = {
  font: ['fontFamily'],
  marginY: ['marginTop', 'marginBottom'],
  paddingY: ['paddingTop', 'paddingBottom'],
  marginX: ['marginLeft', 'marginRight'],
  paddingX: ['paddingLeft', 'paddingRight'],
};

function getBorderValue({ theme, value }) {
  const borderValue = border(value)({ theme });
  if (borderValue) {
    return `${borderValue.width} solid ${borderValue.color}`;
  }
  return value;
}

function getBorderRadiusValue({ theme, value }) {
  const borderRadiusValue = borderRadius(value)({ theme });
  if (borderRadiusValue) {
    return borderRadiusValue;
  }
  return value;
}

function getColorValue({ colorMode, theme, value }) {
  const color = palette(value)({ colorMode, theme });
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

function getFontValue({ theme, value }) {
  const fontValue = font(value)({ theme });
  if (fontValue) {
    return fontValue;
  }
  return value;
}

function getFontSizeValue({ theme, value }) {
  const size = fontSize(value)({ theme });
  if (size) {
    return `${size}rem`;
  }
  return value;
}

function getFontWeightValue({ theme, value }) {
  const weight = fontWeight(value)({ theme });
  if (weight) {
    return weight;
  }
  return value;
}

function getLineHeightValue({ theme, value }) {
  const height = lineHeight(value)({ theme });
  if (height) {
    return height;
  }
  return value;
}

function getLetterSpacingValue({ theme, value }) {
  const spacing = letterSpacing(value)({ theme });
  if (spacing) {
    return spacing;
  }
  return value;
}

export function getCSSFromStyleObject(props, theme, colorMode, { fromProps = false, disableCSSProps = [] } = {}) {
  let style = { ...props };
  if (style) {
    let styleEntries = Object.entries(style);
    styleEntries = styleEntries.reduce((prevStyle, [attribute, value]) => {
      let entries = [[attribute, value]];
      if (attributeMaps[attribute]) {
        entries = attributeMaps[attribute].map((attribute) => [attribute, value]);
      }
      return [...prevStyle, ...entries];
    }, []);

    style = styleEntries.reduce((prevStyle, [attribute, value]) => {
      let newValue = value;
      if (attribute.includes(':')) {
        return css`
          ${prevStyle};

          ${attribute} {
            ${getCSSFromStyleObject(value, theme, colorMode, { fromProps })};
          }
        `;
      }
      if (typeof newValue === 'string') {
        newValue = { default: value };
      }
      if (attribute.includes('_')) {
        const pseudoSelector = cssPropsMap[attribute];
        return css`
          ${prevStyle};

          ${pseudoSelector} {
            ${getCSSFromStyleObject(value, theme, colorMode, { fromProps })};
          }
        `;
      }
      const newStyle = Object.entries(newValue || {}).reduce((prevStyle, [bp, value]) => {
        let newValue = value;
        if (borderAttributes.includes(attribute)) {
          newValue = getBorderValue({ theme, value });
        }
        if (borderRadiusAttributes.includes(attribute)) {
          newValue = getBorderRadiusValue({ theme, value });
        }
        if (colorAttributes.includes(attribute)) {
          newValue = getColorValue({ colorMode, theme, value });
        }
        if (spaceAttributes.includes(attribute)) {
          newValue = getSpaceValue({ theme, value });
        }
        if (fontAttributes.includes(attribute)) {
          newValue = getFontValue({ theme, value });
        }
        if (fontSizeAttributes.includes(attribute)) {
          if (disableCSSProps.includes('fontSize')) {
            return {};
          }
          newValue = getFontSizeValue({ theme, value });
        }
        if (fontWeightAttributes.includes(attribute)) {
          newValue = getFontWeightValue({ theme, value });
        }
        if (lineHeightAttributes.includes(attribute)) {
          newValue = getLineHeightValue({ theme, value });
        }
        if (letterSpacingAttributes.includes(attribute)) {
          newValue = getLetterSpacingValue({ theme, value });
        }
        if (bp === 'default') {
          // @ts-ignore
          return css`
            ${prevStyle}
            ${css`
                  ${_kebabCase(attribute)}: ${newValue} ${fromProps ? '!important' : ''};
                `}
          `;
        }
        return css`
          ${prevStyle};
          ${breakpoint(
            bp,
            // @ts-ignore
            css`
              ${css`
                    ${_kebabCase(attribute)}: ${newValue} ${fromProps ? '!important' : ''};
                  `}
            `
          )({ theme })};
        `;
      }, css``);
      return css`
        ${prevStyle} ${newStyle};
      `;
    }, css``);
  }

  return style;
}
