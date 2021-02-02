import _kebabCase from 'lodash/kebabCase';

import { css } from '../styled';
import {
  altitude,
  border,
  borderRadius,
  font,
  fontSize,
  lineHeight,
  palette,
  space,
  fontWeight,
  letterSpacing,
} from './theme';
import { Platform } from 'react-native';

const FLEX_HORIZONTAL_ALIGN_MAP = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const FLEX_VERTICAL_ALIGN_MAP = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

const alignAttributes = ['alignX', 'alignY'];
const altitudeAttributes = ['altitude'];
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
  'height',
  'width',
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

function getAlignmentStyles({ attribute, value, props }) {
  const alignYAttribute = props.display && props.display.includes('flex') ? 'align-items' : 'justify-content';
  const alignXAttribute = props.display && props.display.includes('flex') ? 'justify-content' : 'align-items';
  return css`
      display: flex;

      ${
        !props.display &&
        css`
          flex-direction: column;
        `
      }

      ${
        attribute === 'alignY' &&
        css`
          ${alignYAttribute}: ${FLEX_VERTICAL_ALIGN_MAP[value]};
        `
      }

      ${
        attribute === 'alignX' &&
        css`
          ${alignXAttribute}: ${FLEX_HORIZONTAL_ALIGN_MAP[value]};
        `
      }
    `;
}

function getAltitudeStyles({ theme, value }) {
  const altitudeStyle = altitude(value)({ theme });
  if (altitudeStyle) {
    return altitudeStyle;
  }
  return value;
}

function getBorderValue({ theme, value }) {
  const borderValue = border(value)({ theme });
  if (borderValue) {
    const borderColor = palette(borderValue.color)({ theme });
    return `${borderValue.width} ${borderValue.style} ${borderColor}`;
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
    return `${spacing}px`;
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
    return `${size}px`;
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
      if (typeof value === 'function') {
        newValue = value({ theme });
      }
      if (attribute.includes(':')) {
        return css`
          ${prevStyle};

          ${attribute} {
            ${getCSSFromStyleObject(value, theme, colorMode, { fromProps })};
          }
        `;
      }
      if (typeof newValue === 'string') {
        newValue = { default: newValue };
      }
      if (attribute.includes('_')) {
        const platform = attribute.slice(1);
        return css`
          ${prevStyle};
          ${(Platform.OS === platform || (platform === 'native' && Platform.OS !== 'web')) &&
          getCSSFromStyleObject(value, theme, colorMode, { fromProps })}
        `;
      }
      const newStyle = Object.entries(newValue || {}).reduce((prevStyle, [platform, value]) => {
        let newStyle;
        let newValue = value;
        if (alignAttributes.includes(attribute)) {
          newStyle = getAlignmentStyles({ attribute, value, props });
          newValue = undefined;
        }
        if (altitudeAttributes.includes(attribute)) {
          newStyle = getAltitudeStyles({ theme, value });
          newValue = undefined;
        }
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
        if (platform === 'default' || Platform.OS === platform || (platform === 'native' && Platform.OS !== 'web')) {
          // @ts-ignore
          return css`
            ${prevStyle};
            ${newStyle};
            ${newValue
              ? css`
                  ${_kebabCase(attribute)}: ${newValue};
                `
              : ''}
          `;
        }
        return css`
          ${prevStyle};
          ${newStyle};
        `;
      }, css``);
      return css`
        ${prevStyle} ${newStyle};
      `;
    }, css``);
  }

  return style;
}
