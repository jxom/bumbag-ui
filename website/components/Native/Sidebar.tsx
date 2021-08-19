import * as React from 'react';

import Sidebar from '../Sidebar';

const orders = [
  {
    '': [
      'getting-started',
      'platform-compatibility',
      'theming',
      'styling-components',
      'palette',
      'breakpoints',
      'fonts',
      'spacing',
      'composition',
      'variants',
      'color-modes',
    ],
  },
  {
    'the-box-primitive': [
      'box',
      'flex',
      'style-props',
      'box-scroll',
      'box-safe',
      'box-touchable',
      'box-touchablewithoutfeedback',
      'box-keyboardavoiding',
    ],
  },
  { hooks: [] },
  { layout: [] },
  { typography: [] },
  { components: [] },
  { form: [] },
  { utilities: [] },
];

export default function DocsSidebar() {
  return <Sidebar orders={orders} items={[]} path={''} />;
}
