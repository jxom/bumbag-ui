// @ts-nocheck
import { Svg } from 'react-native-svg';
import { styled } from '../styled';
import { fontSize, theme, palette } from '../utils';

export const StyledIcon = styled(Svg)`
  color: ${(props) => palette(props.color)(props)};
  display: flex;
  min-height: ${(props) => `${fontSize(props.size)(props) || '16'}px`};
  min-width: ${(props) => `${fontSize(props.size)(props) || '16'}px`};

  ${theme('native.Icon', 'styles.base')};
`;
