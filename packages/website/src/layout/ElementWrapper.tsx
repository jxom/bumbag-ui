import * as React from 'react';
import _merge from 'lodash/merge';
import _omit from 'lodash/omit';
import queryString from 'query-string';

import { Provider, ToastManager } from 'bumbag';
import defaultTheme from '../theme';
import { themeMap } from '../utils/theme';

export default function ElementWrapper(props: { element: React.ReactNode }) {
  const { element } = props;
  const themeName = (queryString.parse(typeof window !== 'undefined' ? window.location.search : '') || {}).theme;
  const targetTheme = themeMap[themeName] || {};
  const theme = _merge(defaultTheme, _omit(targetTheme, 'SideNav', 'PageWithSidebar'));

  return (
    <Provider theme={theme}>
      {element}
      <ToastManager isStacked={false} />
    </Provider>
  );
}
