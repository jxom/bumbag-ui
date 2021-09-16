import { Box } from 'bumbag-native/Box';
import { Menu, MenuOptionList, MenuOptionGroup, MenuOptionItem } from 'bumbag-native/Menu';
import { styled } from 'bumbag-native/styled';
import { theme } from 'bumbag-native/utils/theme';

export const Picker = styled(Box)`
  ${theme('native.Picker', 'styles.base')};
`;

export const PickerOptionList = styled(MenuOptionList)`
  ${theme('native.Picker', 'OptionList.styles.base')};
`;

export const PickerMenuOptionItem = styled(MenuOptionItem)`
  ${theme('native.Picker', 'OptionItem.styles.base')};
`;
