import { VirtualizedList } from 'react-native';
import { styled } from '../styled';
import { theme } from '../utils/theme';

export const StyledListFlat = styled.FlatList`
  ${theme('native.List.Flat', 'styles.base')};
`;

export const StyledListSection = styled.SectionList`
  ${theme('native.List.Section', 'styles.base')};
`;

export const StyledListVirtualized = styled(VirtualizedList)`
  ${theme('native.List.Virtualized', 'styles.base')};
`;
