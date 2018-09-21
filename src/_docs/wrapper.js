import React from 'react';
import { css } from 'reakit';
import { palette } from 'styled-tools';
import ThemeProvider from '../theme/ThemeProvider';

const theme = {
  button: {}
};

const Wrapper = ({ children }: Object) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Wrapper;
