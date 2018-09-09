import React from 'react';
import ThemeProvider from '../theme/ThemeProvider';

const Wrapper = ({ children }: Object) => <ThemeProvider>{children}</ThemeProvider>;

export default Wrapper;
