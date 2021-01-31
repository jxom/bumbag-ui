import { TouchableOpacity } from 'react-native';
import { styled } from '../styled';
import { borderRadius, palette, space, theme } from '../utils/theme';

export const StyledButton = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${(props: any) => palette(props.palette)(props)};
  border-radius: ${borderRadius('default')};
  border: 1px solid black;
  display: inline-flex;
  justify-content: center;
  min-height: ${(props) => `${space(5.5, 'major')(props)}px`};
  padding: 0 ${(props) => `${space(4)(props)}px`};
  text-decoration: none;

  ${(props: any) =>
    props.palette === 'default' &&
    `
      border: 1px solid ${palette('white900', { dark: 'gray600' })(props)};
    `}

  ${theme('native.Button', 'styles.base')};
`;
