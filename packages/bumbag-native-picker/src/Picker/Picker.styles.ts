import { Box } from 'bumbag-native/Box';
import { Icon } from 'bumbag-native/Icon';
import { Text } from 'bumbag-native/Text';
import { styled } from 'bumbag-native/styled';
import { palette, space, theme } from 'bumbag-native/utils/theme';

export const StyledPickerIOS = styled(Box)`
  ${theme('native.Picker.IOS', 'styles.base')};
`;

export const StyledPicker = styled(Box)`
  ${theme('native.Picker', 'styles.base')};
`;

export const StyledPickerItem = styled(Box.Touchable)`
  flex-direction: row;
  align-items: center;
  height: ${(props) => `${space('major-6')(props)}px`};
  padding-left: ${(props) => (props.alignCheckIcon === 'left' ? `${space('major-1')(props)}px` : `0px`)};

  ${(props) =>
    !props.disabled
      ? `
        cursor: pointer;
        `
      : ''}

  ${(props) =>
    props.hover && !props.disabled
      ? `
    background-color: ${palette('white600')(props)};

    ${theme('native.Picker', 'Item.styles.hover')};
  `
      : ''}

  ${(props) =>
    props.hoveractive && !props.disabled
      ? `
    background-color: ${palette('white700')(props)};

    ${theme('native.Picker', 'Item.styles.hoveractive')};
  `
      : ''}

  ${(props) =>
    props.focus && !props.disabled
      ? `
    background-color: ${palette('white600')(props)};

    ${theme('native.Picker', 'Item.styles.focus')};
  `
      : ''}

  ${(props) =>
    props.disabled
      ? `
    opacity: 0.5;
    `
      : ''}

  ${theme('native.Picker', 'Item.styles.base')};
`;

export const StyledPickerItemLabel = styled(Text)`
  font-weight: 500;

  ${(props) =>
    props.checked
      ? `
        color: ${palette(props.palette || 'primary')(props)};

        ${theme('native.Picker', 'ItemLabel.styles.checked')(props)};
        `
      : ''}

  ${theme('native.Picker', 'ItemLabel.styles.base')};
`;

export const StyledPickerItemLabelWrapper = styled(Box)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-right: ${(props) =>
    props.alignCheckIcon === 'left' ? `${space('major-1')(props)}px` : `${space('major-2')(props)}px`};
  padding-left: ${(props) => (props.alignCheckIcon === 'left' ? `0px` : `${space('major-2')(props)}px`)};

  ${(props) =>
    props.hasDivider
      ? `
    border-bottom-width: 1px;
    border-bottom-color: ${palette('white800')(props)};
  `
      : ''}

  ${theme('native.Picker', 'ItemLabelWrapper.styles.base')};
`;

export const StyledPickerItemIconWrapper = styled(Box)`
  width: ${(props) => `${space('major-2')(props)}px`};

  ${(props) =>
    props.alignCheckIcon === 'left'
      ? `
        margin-right: ${space('major-1')(props)}px;
        `
      : ''};

  ${(props) =>
    props.alignCheckIcon === 'right'
      ? `
        margin-left: ${space('major-1')(props)}px;
        `
      : ''};

  ${theme('native.Picker', 'ItemIconWrapper.styles.base')};
`;

export const StyledPickerItemIcon = styled(Icon)`
  ${theme('native.Picker', 'ItemIcon.styles.base')};
`;
