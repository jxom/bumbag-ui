import { styled } from '../styled';
import { palette, space, theme } from '../utils/theme';
import { Box } from '../Box';
import { Pressable } from '../Pressable';
import { Icon } from '../Icon';
import { Set } from '../Set';
import { Text } from '../Text';
import { Radio as BBRadio } from './Radio';

export const Radio = styled(Pressable)`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.align === 'right'
      ? `
    justify-content: space-between;
  `
      : ''}

  ${theme('native.Radio', 'styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const RadioIcon = styled(Box)`
  border-style: solid;
  border-width: 1px;
  border-radius: ${(props) => `${space(3, 'major')(props)}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => `${space(3, 'major')(props)}px`};
  height: ${(props) => `${space(3, 'major')(props)}px`};

  ${getVariantRadioIconStyles}
  ${getStateRadioIconStyles}

  ${(props) =>
    props.disabled
      ? `
      background-color: ${palette('white900', { dark: 'gray700' })(props)};
      border-color: ${palette('white900', { dark: 'gray700' })(props)};
    `
      : ''}

  ${(props) =>
    props.align === 'left'
      ? `
    margin-right: ${space(1, 'major')(props)}px;
  `
      : `
    margin-left: ${space(1, 'major')(props)}px;
      `}

  ${theme('native.Radio', 'Icon.styles.base')};
`;

function getVariantRadioIconStyles(props) {
  if (props.variant === 'default') {
    return props.checked
      ? `
        border-width: 2px;
        border-color: ${palette(props.checkedColor)(props)};
      `
      : `
        background-color: ${palette(props.uncheckedColor)(props)};
        border-color: ${palette('white900', { dark: 'gray700' })(props)};
    `;
  }
  if (props.variant === 'ghost') {
    return `
      border-width: 0px;
    `;
  }
}

function getStateRadioIconStyles(props) {
  return props.state && !props.checked
    ? `
    border-width: 1px;
    border-color: ${palette(props.state)(props)};
  `
    : '';
}

//////////////////////////////////////////////////////////////////

export const RadioCheckIcon = styled(Icon)`
  ${theme('native.Radio', 'CheckIcon.styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const RadioLabel = styled(Text)`
  ${theme('native.Radio', 'Label.styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const RadioGroup = styled(Box)`
  ${theme('native.RadioGroup', 'styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const RadioGroupSet = styled(Set)`
  ${theme('native.RadioGroup', 'Set.styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const RadioGroupItem = styled((BBRadio || {}) as any)`
  ${theme('native.RadioGroup', 'Item.styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const RadioGroupField = styled(Box)`
  ${theme('native.RadioGroupField', 'styles.base')};
`;
