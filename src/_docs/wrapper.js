import React from 'react';
import { css } from 'reakit';
import ThemeProvider from '../theme/ThemeProvider';

const theme = {
  spinner: {
    base: css`
      font-size: 2rem;
    `,
    sizes: {
      small: css`
        font-size: 3rem;
      `
    }
  }
};

const Wrapper = ({ children }: Object) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Wrapper;
