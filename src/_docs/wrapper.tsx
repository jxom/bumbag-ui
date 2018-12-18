import * as React from 'react';
import 'parse-prop-types';
import ThemeProvider from '../ThemeProvider';

const Wrapper = ({ children }: { children: React.ReactNode }) => <ThemeProvider>{children}</ThemeProvider>;

export default Wrapper;
