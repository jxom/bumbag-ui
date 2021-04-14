import { Switch as RNSwitch } from 'react-native';
import { styled } from '../styled';
import { space, theme } from '../utils/theme';
import { Box } from '../Box';
import { Pressable } from '../Pressable';
import { Text } from '../Text';

export const Switch = styled(Pressable)`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.align === 'right'
      ? `
    justify-content: space-between;
  `
      : ''}

  ${theme('native.Switch', 'styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const SwitchToggle = styled(RNSwitch)`
  ${(props: any) =>
    props.align === 'left'
      ? `
    margin-right: ${space(1, 'major')(props)}px;
  `
      : `
    margin-left: ${space(1, 'major')(props)}px;
      `}

  ${theme('native.Switch', 'Toggle.styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const SwitchLabel = styled(Text)`
  ${theme('native.Switch', 'Label.styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const SwitchField = styled(Box)`
  ${theme('native.SwitchField', 'styles.base')};
`;
