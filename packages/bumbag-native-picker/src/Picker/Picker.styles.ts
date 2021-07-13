import { Box } from 'bumbag-native/Box';
import { Menu, MenuOptionGroup, MenuOptionItem } from 'bumbag-native/Menu';
import { styled } from 'bumbag-native/styled';
import { theme } from 'bumbag-native/utils/theme';

export const Picker = styled(Box)`
  ${theme('native.Picker', 'styles.base')};
`;

export const PickerMenu = styled(Menu)`
  ${theme('native.Picker', 'Menu.styles.base')};
`;

export const PickerMenuOptionGroup = styled(MenuOptionGroup)`
  ${theme('native.Picker', 'OptionGroup.styles.base')};
`;

export const PickerMenuOptionItem = styled(MenuOptionItem)`
  ${theme('native.Picker', 'OptionItem.styles.base')};
`;
