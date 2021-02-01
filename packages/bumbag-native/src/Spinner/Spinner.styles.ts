import { ActivityIndicator, Platform } from 'react-native';
import { styled } from '../styled';
import { theme } from '../utils/theme';

export const StyledSpinner = styled(ActivityIndicator)`
  ${theme('native.Spinner', 'styles.base')};
`;
