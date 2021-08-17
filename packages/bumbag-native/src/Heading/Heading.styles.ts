import { Text } from 'react-native';
import { styled } from '../styled';
import { font, palette, fontSize, theme } from '../utils/theme';
import { getFontStyles } from '../utils/getFontStyles';

export const StyledHeading = styled(Text)`
  color: ${palette('text')};
  font-size: ${(props: any) =>
    `${fontSize(theme(`native.Heading${props.type ? `.${props.type}` : ''}`, 'fontSize')(props))(props)}px`};

  ${(props) =>
    !props.fontWeight
      ? getFontStyles({ fontWeight: '700', fontFamily: props.font || props.fontFamily || 'heading' })
      : ''}

  ${theme('native.Heading', 'styles.base')};
  ${(props: any) => (props.type ? theme(`native.Heading.${props.type}`, 'styles.base')(props) : '')};
`;
