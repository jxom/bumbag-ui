import { Text } from 'react-native';
import { styled } from '../styled';
import { palette, fontWeight, fontSize, theme } from '../utils/theme';

export const StyledHeading = styled(Text)`
  color: ${palette('text')};
  font-size: ${(props: any) =>
    `${fontSize(theme(`native.Heading${props.type ? `.${props.type}` : ''}`, 'fontSize')(props))(props)}px`};
  font-weight: ${(props) => `${fontWeight('bold')(props)}`};

  ${(props) => theme(`native.Heading${props.type ? `.${props.type}` : ''}`, 'styles.base')(props)};
`;
