import { ActivityIndicator } from 'react-native';
import { styled } from '../styled';
import { theme } from '../utils/theme';

export const StyledSpinner = styled(ActivityIndicator)`
  display: inline-block;

  ${theme('native.Spinner', 'styles.base')};
`;
