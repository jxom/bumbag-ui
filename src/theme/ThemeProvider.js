import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Provider as ReakitProvider } from 'reakit';
import * as theme from './index';
import '../global.styled.js';

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ReakitProvider theme={theme.reakit}>{children}</ReakitProvider>
  </ThemeProvider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Provider;
