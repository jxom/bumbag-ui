import React from 'react';
import { css } from 'reakit';
import ThemeProvider from '../ThemeProvider';

const theme = {
  global: {
    base: css`
      li {
        margin-bottom: 0.5rem;
      }
    `
  }
};

const Wrapper = ({ children }: Object) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Wrapper;
