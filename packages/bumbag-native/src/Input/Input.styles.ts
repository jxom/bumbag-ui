import { TextInput } from 'react-native';

import { AnimatedText } from '../Animated';
import { styled } from '../styled';
import { borderRadius, fontSize, palette, theme } from '../utils/theme';

export const StyledInput = styled(TextInput)`
  background: ${palette('default')};
  font-size: ${(props) => `${fontSize('200')(props)}px`};
  height: 44px;

  ${getVariantStyles}
  ${getDisabledStyles}

  ${theme('native.Input', 'styles.base')};
`;

function getVariantStyles(props) {
  if (props.variant === 'bordered') {
    return `
      border: 1px solid ${palette('white900', { dark: 'gray700' })(props)};
      border-radius: ${borderRadius('default')(props)};
      padding: 6.4px 12.8px;

      ${
        props.focus
          ? `
            border: 2px solid ${palette('primary')(props)};
            padding: 6.4px 11.8px;
          `
          : ''
      }
    `;
  }
  if (props.variant === 'underline') {
    return `
      border-bottom-width: 1px;
      border-bottom-color: ${palette('white900', { dark: 'gray700' })(props)};
      border-radius: 0px;
      padding: 6.4px 0px;

      ${
        props.focus
          ? `
            border-bottom-color: ${palette('primary')(props)};
            border-bottom-width: 2px;
          `
          : ''
      }
    `;
  }
  if (props.variant === 'borderless') {
    return `
      padding: 6.4px 0px;
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

      ${theme('native.Input', `styles.disabled`)(props)};
    `
    : '';
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
      margin: 0px 12.8px;
      padding: 0px 4px;
    `;
  }
  if (props.variant === 'underline') {
    return ``;
  }
  if (props.variant === 'borderless') {
    return ``;
  }
  return '';
}
