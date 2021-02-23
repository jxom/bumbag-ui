import { TextInput } from 'react-native';

import { AnimatedText } from '../Animated';
import { styled } from '../styled';
import { borderRadius, fontSize, palette, space, theme } from '../utils/theme';

export const SIZES = {
  small: '100',
  default: '200',
  medium: '300',
  large: '400',
};

export const StyledInput = styled(TextInput)`
  background: ${palette('default')};
  font-size: ${(props: any) => `${fontSize(props.fontSize)(props)}px`};
  height: ${(props: any) => `${space(2.75, props.fontSize)(props)}px`};

  ${getVariantStyles}
  ${getDisabledStyles}
  ${getSizeStyles}

  ${theme('native.Input', 'styles.base')};
`;

function getVariantStyles(props) {
  if (props.variant === 'bordered') {
    return `
      border: 1px solid ${palette(props.palette || 'white900', { dark: 'gray700' })(props)};
      border-radius: ${borderRadius('default')(props)};
      padding: ${space(0.4, props.fontSize)(props)}px ${space(0.8, props.fontSize)(props)}px;

      ${
        props.focus
          ? `
            border: 2px solid ${palette(props.palette || 'primary')(props)};
            padding: ${space(0.4, props.fontSize)(props)}px ${space(0.8, props.fontSize)(props) - 1}px;
          `
          : ''
      }

      ${theme('native.Input.variants.bordered', `styles.base`)(props)};
    `;
  }
  if (props.variant === 'underline') {
    return `
      border-bottom-width: 1px;
      border-bottom-color: ${palette(props.palette || 'white900', { dark: 'gray700' })(props)};
      border-radius: 0px;
      padding: ${space(0.4, props.fontSize)(props)}px 0px;

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
      padding: ${space(0.4, props.fontSize)(props)}px 0px;

      ${theme('native.Input.variants.borderless', `styles.base`)(props)};
    `;
  }
  return '';
}

function getDisabledStyles(props) {
  return props.disabled
    ? `
      background-color: ${palette('white700', { dark: 'black200' })(props)};
      color: ${palette('text100')(props)};
      cursor: not-allowed;
      padding: ${space(0.4, props.fontSize)(props)}px ${space(0.8, props.fontSize)(props)}px;

      ${theme('native.Input', `styles.disabled`)(props)};
    `
    : '';
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

//////////////////////////////////////////////////////////////////

export const StyledAnimatedLabel = styled(AnimatedText)`
  position: absolute;

  ${getAnimatedLabelVariantStyles}

  ${theme('native.Input', 'AnimatedLabel.styles.base')};
`;

function getAnimatedLabelVariantStyles(props) {
  if (props.variant === 'bordered') {
    return `
      background-color: white;
      margin: 0px ${space(0.675, props.fontSize)(props)}px;
      padding: 0px ${space(0.25, props.fontSize)(props)}px;

      ${theme('native.Input.variants.bordered', 'AnimatedLabel.styles.base')};
    `;
  }
  if (props.variant === 'underline') {
    return `
      ${theme('native.Input.variants.underline', 'AnimatedLabel.styles.base')};
    `;
  }
  if (props.variant === 'borderless') {
    return `
      ${theme('native.Input.variants.borderless', 'AnimatedLabel.styles.base')};
    `;
  }
  return '';
}
