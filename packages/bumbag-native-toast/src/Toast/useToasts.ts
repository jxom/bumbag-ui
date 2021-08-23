import * as React from 'react';

import { ToastContext } from './ToastContext';

export function useToasts() {
  return React.useContext(ToastContext);
}
