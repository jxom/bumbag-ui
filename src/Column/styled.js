// import { css } from 'styled-components';
import styled from 'reakit/styled';
import Box from 'reakit/Box';
import { theme } from 'styled-tools';

const Column = styled(Box)`
  flex: 1;
  max-width: 100%;
  padding: ${theme('layout.gapFactor')}rem;
`;

export default Column;
