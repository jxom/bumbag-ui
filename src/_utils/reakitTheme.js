import { css } from 'reakit/styled';
import _camelCase from 'lodash/camelCase';

const buildColorFromPalette = (property, props) => {
  let color = props.theme.palette[props[_camelCase(property)]];
  if (typeof color === 'function') {
    color = color(props);
  }
  if (!color) return;
  return `${property}: ${color} !important;`;
};

const buildSpacingFromTheme = (property, props) => {
  let spacing = props.theme.layout.spacing[props[_camelCase(property)]];
  if (!spacing) return;
  return `${property}: ${spacing}rem !important;`;
};

const buildFontSizeFromTheme = (property, props) => {
  let size = props.theme.fontSizes[props[_camelCase(property)]];
  if (!size) return;
  return `${property}: ${size}em !important;`;
};

export default {
  Box: css`
    /* If the color is one from the palette, use it. E.g. background-color="primary" */
    ${props => buildColorFromPalette('color', props)};
    ${props => buildColorFromPalette('background-color', props)};
    ${props => buildColorFromPalette('border-block-end-color', props)};
    ${props => buildColorFromPalette('border-block-start-color', props)};
    ${props => buildColorFromPalette('border-bottom-color', props)};
    ${props => buildColorFromPalette('border-color', props)};
    ${props => buildColorFromPalette('border-inline-end-color', props)};
    ${props => buildColorFromPalette('border-inline-start-color', props)};
    ${props => buildColorFromPalette('border-left-color', props)};
    ${props => buildColorFromPalette('border-right-color', props)};
    ${props => buildColorFromPalette('border-top-color', props)};
    ${props => buildColorFromPalette('border-bottom-color', props)};
    ${props => buildColorFromPalette('caret-color', props)};
    ${props => buildColorFromPalette('column-rule-color', props)};
    ${props => buildColorFromPalette('outline-color', props)};
    ${props => buildColorFromPalette('text-decoration-color', props)};
    ${props => buildColorFromPalette('text-emphasis-color', props)};

    ${props => buildSpacingFromTheme('margin', props)};
    ${props => buildSpacingFromTheme('margin-left', props)};
    ${props => buildSpacingFromTheme('margin-right', props)};
    ${props => buildSpacingFromTheme('margin-top', props)};
    ${props => buildSpacingFromTheme('margin-bottom', props)};
    ${props => buildSpacingFromTheme('padding', props)};
    ${props => buildSpacingFromTheme('padding-left', props)};
    ${props => buildSpacingFromTheme('padding-right', props)};
    ${props => buildSpacingFromTheme('padding-top', props)};
    ${props => buildSpacingFromTheme('padding-bottom', props)};

    ${props => buildFontSizeFromTheme('font-size', props)};
  `
};
