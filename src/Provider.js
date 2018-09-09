import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Provider as ReakitProvider } from 'reakit';
import { styled, reakit } from './theme';
import './global.styled.js';

const Provider = ({ children }) => (
  <ThemeProvider theme={styled}>
    <ReakitProvider theme={reakit}>{children}</ReakitProvider>
  </ThemeProvider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Provider;
