import React from 'react';
import PropTypes from 'prop-types';
import { Box, Provider as ThemeProvider, styled } from 'reakit';
import { palette } from 'styled-tools';
import theme from './index';

const Wrapper = styled(Box)`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  *:focus {
    outline: 2px solid ${palette('primary')};
    outline-offset: 2px;
  }
`;

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Provider;
