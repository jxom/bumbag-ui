// import { css } from 'reakit/styled';
import styled from 'reakit/styled';
import Box from 'reakit/Box';
import { theme } from 'styled-tools';

export default styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${theme('layout.gapFactor')}rem;

  @media (max-width: ${theme('layout.maxMobileBreakpoint')}) {
    display: block;
  }
`;
