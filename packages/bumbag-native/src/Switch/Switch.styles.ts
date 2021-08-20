import { styled } from '../styled';
import { space, theme } from '../utils/theme';
import { Box } from '../Box';
import { Pressable } from '../Pressable';
import { Set } from '../Set';
import { Text } from '../Text';
import { Switch as BBSwitch } from './Switch';

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

export const SwitchToggle = styled.Switch`
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

//////////////////////////////////////////////////////////////////

export const SwitchGroup = styled(Box)`
  ${theme('native.SwitchGroup', 'styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const SwitchGroupSet = styled(Set)`
  ${theme('native.SwitchGroup', 'Set.styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const SwitchGroupItem = styled((BBSwitch || {}) as any)`
  ${theme('native.SwitchGroup', 'Item.styles.base')};
`;

//////////////////////////////////////////////////////////////////

export const SwitchGroupField = styled(Box)`
  ${theme('native.SwitchGroupField', 'styles.base')};
`;
