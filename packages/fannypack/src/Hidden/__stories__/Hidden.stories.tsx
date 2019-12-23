import * as React from 'react';
import { Box, Hidden, LayoutSet, Button, Set } from '../../';

export default { title: 'Hidden' };

export function _default() {
  const hidden = Hidden.useState({ visible: true });

  return (
    <div>
      <Hidden.Disclosure {...hidden}>Toggle</Hidden.Disclosure>
      <Hidden {...hidden}>Hello world</Hidden>
    </div>
  );
}
