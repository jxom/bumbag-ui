import { Image } from 'react-native';
import { styled } from '../styled';
import { theme } from '../utils/theme';

export const StyledImage = styled(Image)`
  ${theme('Image', 'styles.base')};
`;
