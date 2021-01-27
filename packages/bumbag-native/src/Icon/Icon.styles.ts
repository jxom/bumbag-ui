// @ts-nocheck
import { Svg } from 'react-native-svg';
import { styled } from '../styled';
import { theme, palette } from '../utils';

export const StyledIcon = styled(Svg)`
  color: ${(props) => palette(props.color)(props)};
  position: relative;

  ${theme('native.Icon', 'styles.base')};
`;
