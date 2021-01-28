// @ts-nocheck
import { Svg } from 'react-native-svg';
import { styled } from '../styled';
import { fontSize, theme, palette } from '../utils';

export const StyledIcon = styled(Svg)`
  color: ${(props) => palette(props.color)(props)};
  min-height: ${(props) => `${fontSize(props.size)(props)}px`};
  min-width: ${(props) => `${fontSize(props.size)(props)}px`};
  position: relative;

  ${theme('native.Icon', 'styles.base')};
`;
