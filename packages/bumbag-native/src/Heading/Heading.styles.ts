import { Text } from 'react-native';
import { styled } from '../styled';
import { font, palette, fontWeight, fontSize, theme } from '../utils/theme';

export const StyledHeading = styled(Text)`
  color: ${palette('text')};
  font-size: ${(props: any) =>
    `${fontSize(theme(`native.Heading${props.type ? `.${props.type}` : ''}`, 'fontSize')(props))(props)}px`};
  font-weight: ${(props) => `${fontWeight('bold')(props)}`};

  ${(props) =>
    font('heading')(props) || font('default')(props)
      ? `
          font-family: ${font('heading')(props) || font('default')(props)};
        `
      : ``};

  ${theme('native.Heading', 'styles.base')};
  ${(props) => (props.type ? theme(`native.Heading.${props.type}`, 'styles.base')(props) : '')};
`;
