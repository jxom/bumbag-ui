import { Animated, Platform } from 'react-native';

import { AnimatedText } from '../Animated';
import { Box } from '../Box';
import { styled } from '../styled';
import { borderRadius, fontSize, palette, space, theme } from '../utils/theme';

export const SIZES = {
  small: '100',
  default: '200',
  medium: '300',
  large: '400',
};

export const StyledInput = styled.TextInput`
  color: ${palette('text')};
  font-size: ${(props: any) => `${fontSize(props.styledFontSize)(props)}px`};
  height: ${(props: any) => `${space(2.75, props.styledFontSize)(props)}px`};

  ${getVariantStyles}
  ${getSizeStyles}
  ${getIconPaddingStyles}

  ${theme('native.Input', 'styles.base')};
`;

function getVariantStyles(props) {
  if (props.variant === 'bordered') {
    return `
      background-color: ${palette('default')(props)};
      border: 1px solid ${palette(props.state || props.palette || 'white900', { dark: 'gray700' })(props)};
      border-radius: ${borderRadius('default')(props)};
      padding: ${space(0.4, props.styledFontSize)(props)}px ${space(0.8, props.styledFontSize)(props)}px;

      ${
        props.disabled
          ? `
      background-color: ${palette('white700', { dark: 'black200' })(props)};
      color: ${palette('text100')(props)};
      padding: ${space(0.4, props.styledFontSize)(props)}px ${space(0.8, props.styledFontSize)(props)}px;
      `
          : ''
      }

      ${
        props.focus
          ? `
            border: 2px solid ${palette(props.palette || 'primary')(props)};
            padding: ${space(0.4, props.styledFontSize)(props)}px ${space(0.8, props.styledFontSize)(props) - 1}px;
          `
          : ''
      }

      ${theme('native.Input.variants.bordered', `styles.base`)(props)};
    `;
  }
  if (props.variant === 'underline') {
    return `
      border-bottom-width: 1px;
      border-bottom-color: ${palette(props.state || props.palette || 'white900', { dark: 'gray700' })(props)};
      border-radius: 0px;
      padding: ${space(0.4, props.styledFontSize)(props)}px 0px;

      ${
        props.disabled
          ? `
      background-color: ${palette('white700', { dark: 'black200' })(props)};
      color: ${palette('text100')(props)};
      padding: ${space(0.4, props.styledFontSize)(props)}px ${space(0.8, props.styledFontSize)(props)}px;
      `
          : ''
      }

      ${
        props.focus
          ? `
            border-bottom-color: ${palette(props.palette || 'primary')(props)};
            border-bottom-width: 2px;
          `
          : ''
      }

      ${theme('native.Input.variants.underline', `styles.base`)(props)};
    `;
  }
  if (props.variant === 'borderless') {
    return `
      padding: ${space(0.4, props.styledFontSize)(props)}px 0px;

      ${
        props.disabled
          ? `
      background-color: ${palette('white700', { dark: 'black200' })(props)};
      color: ${palette('text100')(props)};
      padding: ${space(0.4, props.styledFontSize)(props)}px ${space(0.8, props.styledFontSize)(props)}px;
      `
          : ''
      }

      ${theme('native.Input.variants.borderless', `styles.base`)(props)};
    `;
  }
  if (props.variant === 'filled') {
    return `
      background-color: ${palette('white700', { dark: 'black300' })(props)};
      border: 2px solid transparent;
      border-radius: ${borderRadius('default')(props)};
      padding: ${space(0.4, props.styledFontSize)(props)}px ${space(0.8, props.styledFontSize)(props)}px;

      ${
        props.focus
          ? `
            background-color: ${palette('white', { dark: 'black100' })(props)};
            border: 2px solid ${palette(props.palette || 'primary')(props)};
          `
          : ''
      }

      ${theme('native.Input.variants.filled', `styles.base`)(props)};
    `;
  }
  return '';
}

function getSizeStyles(props) {
  if (props.size === 'small') {
    return `
      ${theme('native.Input', `styles.sizes.small`)(props)};
    `;
  }
  if (props.size === 'medium') {
    return `
      ${theme('native.Input', `styles.sizes.medium`)(props)};
    `;
  }
  if (props.size === 'large') {
    return `
      ${theme('native.Input', `styles.sizes.large`)(props)};
    `;
  }
  return `
    ${theme('native.Input', `styles.sizes.default`)(props)};
  `;
}

function getIconPaddingStyles(props) {
  if (props.iconBefore || props.iconAfter) {
    let paddingKey = props.iconBefore ? 'padding-left' : 'padding-right';
    if (props.variant === 'bordered') {
      return `
        ${paddingKey}: ${space(2.25, props.styledFontSize)(props)}px;
      `;
    }
    if (props.variant === 'borderless') {
      return `
        ${paddingKey}: ${space(1.5, props.styledFontSize)(props)}px;
      `;
    }
    if (props.variant === 'underline') {
      return `
        ${paddingKey}: ${space(1.5, props.styledFontSize)(props)}px;
      `;
    }
  }
  return ``;
}

//////////////////////////////////////////////////////////////////

export const StyledIconWrapper = styled(Box)`
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;

  ${getIconWrapperPositionStyles}
  ${getIconWrapperVariantStyles}

  ${theme('native.Input', 'IconWrapper.styles.base')};
`;

function getIconWrapperPositionStyles(props) {
  if (props.isAfter) {
    return `
      right: 0px;
    `;
  }
  return ``;
}

function getIconWrapperVariantStyles(props) {
  if (props.variant === 'bordered') {
    return `
      width: ${space(2.5, props.defaultFontSize)(props)}px;
    `;
  }
  return ``;
}

//////////////////////////////////////////////////////////////////

export const StyledAnimatedLabelWrapper = styled(Animated.View)`
  ${getLabelWrapperVariantStyles}
  ${getLabelWrapperMarginStyles}

  ${theme('native.Input', 'LabelWrapper.styles.base')};
`;

function getLabelWrapperVariantStyles(props) {
  if (props.variant === 'bordered') {
    return `
      margin: 0px ${space(0.625, props.defaultFontSize)(props)}px;
    `;
  }
  return ``;
}

function getLabelWrapperMarginStyles(props) {
  if (props.iconBefore || props.iconAfter) {
    const key = props.iconBefore ? 'margin-left' : 'margin-right';
    if (props.variant === 'bordered') {
      return `
        ${key}: ${space(2.125, props.defaultFontSize)(props)}px;
      `;
    }
    if (props.variant === 'borderless' || props.variant === 'underline') {
      return `
        ${key}: ${space(1.5, props.defaultFontSize)(props)}px;
      `;
    }
  }
  return ``;
}

//////////////////////////////////////////////////////////////////

export const StyledAnimatedLabel = styled(AnimatedText)`
  position: absolute;

  ${
    Platform.OS === 'web'
      ? `
        width: max-content;
      `
      : ''
  }

  ${getAnimatedLabelVariantStyles}

  ${theme('native.Input', 'Label.styles.base')};
`;

function getAnimatedLabelVariantStyles(props) {
  if (props.variant === 'bordered') {
    return `
      border-radius: 4px;
      background-color: ${palette('default')(props)};
      padding: 0px ${space(0.25, props.fontSize)(props)}px;

      ${theme('native.Input.variants.bordered', 'Label.styles.base')(props)};
    `;
  }
  if (props.variant === 'underline') {
    return `
      ${theme('native.Input.variants.underline', 'Label.styles.base')(props)};
    `;
  }
  if (props.variant === 'borderless') {
    return `
      ${theme('native.Input.variants.borderless', 'Label.styles.base')(props)};
    `;
  }
  if (props.variant === 'filled') {
    return `
      ${theme('native.Input.variants.filled', 'Label.styles.base')(props)};
    `;
  }
  return '';
}

/////////////////////////////////////////////////////////

export const InputField = styled.View`
  ${theme('native.InputField', 'styles.base')};
`;
