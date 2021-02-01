// @ts-nocheck
import { Svg } from 'react-native-svg';
import { styled } from '../styled';
import { fontSize, theme, palette } from '../utils';

export const StyledIcon = styled(Svg)`
  display: flex;

  ${theme('native.Icon', 'styles.base')};
`;
