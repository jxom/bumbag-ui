import * as React from 'react';

export const BumbagThemeContext = React.createContext<any>({ isSSR: false, setTheme: () => {}, theme: {} });
