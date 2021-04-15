import { styled } from '../styled';
import { borderRadius, palette, space, theme } from '../utils/theme';
import { Box } from '../Box';
import { Pressable } from '../Pressable';
import { Checkbox as BBCheckbox } from './Checkbox';
import { Icon } from '../Icon';
import { Set } from '../Set';
import { Text } from '../Text';

export const Checkbox = styled(Pressable)`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.align === 'right'
      ? `
    justify-content: space-between;
  `
      : ''}

  ${theme('native.Checkbox', 'styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const CheckboxIcon = styled(Box)`
  border-style: solid;
  border-width: 1px;
  border-radius: ${borderRadius('default')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => `${space(3, 'major')(props)}px`};
  height: ${(props) => `${space(3, 'major')(props)}px`};

  ${getVariantCheckboxIconStyles}
  ${getStateCheckboxIconStyles}

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

  ${theme('native.Checkbox', 'Icon.styles.base')};
`;

function getVariantCheckboxIconStyles(props) {
  if (props.variant === 'default') {
    return props.checked
      ? `
        background-color: ${palette(props.checkedColor)(props)};
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

function getStateCheckboxIconStyles(props) {
  return props.state && !props.checked
    ? `
    border-width: 1px;
    border-color: ${palette(props.state)(props)};
  `
    : '';
}

//////////////////////////////////////////////////////////////////

export const CheckboxCheckIcon = styled(Icon)`
  ${theme('native.Checkbox', 'CheckIcon.styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const CheckboxLabel = styled(Text)`
  ${theme('native.Checkbox', 'Label.styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const CheckboxField = styled(Box)`
  ${theme('native.CheckboxField', 'styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const CheckboxGroup = styled(Box)`
  ${theme('native.CheckboxGroup', 'styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const CheckboxGroupSet = styled(Set)`
  ${theme('native.CheckboxGroup', 'Set.styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const CheckboxGroupItem = styled((BBCheckbox || {}) as any)`
  ${theme('native.CheckboxGroup', 'Item.styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const CheckboxGroupField = styled(Box)`
  ${theme('native.CheckboxGroupField', 'styles.base')};
`;
