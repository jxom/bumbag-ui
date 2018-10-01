// @flow
import styled from 'reakit/styled';
import Box from 'reakit/Box';
import { palette, theme } from 'styled-tools'

export default styled(Box)`
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  *:focus {
    outline: 2px solid ${palette('primary')};
    outline-offset: 2px;
  }

  & {
    ${theme('global.base')};
  }
`;
