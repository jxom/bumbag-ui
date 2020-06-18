import * as React from 'react';
import { PageContext } from './PageContext';

export function usePage() {
  const context = React.useContext(PageContext);
  return {
    ...context,
  };
}
