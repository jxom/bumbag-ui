import React from 'react';
// import { css } from 'reakit/styled';
import ThemeProvider from '../theme/ThemeProvider';

const theme = {};

const Wrapper = ({ children }: Object) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Wrapper;
