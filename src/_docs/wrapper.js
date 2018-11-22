import React from 'react';
import ThemeProvider from '../ThemeProvider';

const Wrapper = ({ children }: Object) => <ThemeProvider>{children}</ThemeProvider>;

export default Wrapper;
