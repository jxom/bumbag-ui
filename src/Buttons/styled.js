import styled from 'reakit/styled';
import Flex from 'reakit/Flex';

export const Buttons = styled(Flex)`
  & > *:not(:first-child) {
    margin-left: 0.5rem;
  }
`;
