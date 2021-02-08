import { View } from 'react-native';
import { styled } from '../styled';
import { theme } from '../utils/theme';

export const StyledStack = styled(View)`
  ${(props: any) =>
    props.orientation === 'horizontal'
      ? `
    flex-direction: row;
  `
      : ''}

  ${theme('native.Stack', 'styles.base')};
`;
