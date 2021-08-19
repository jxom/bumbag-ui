import * as React from 'react';

import Sidebar from '../Sidebar';

const orders = [
  {
    '': [
      'getting-started',
      'theming',
      'styling-components',
      'palette',
      'global-styles',
      'breakpoints',
      'fonts',
      'spacing',
      'composition',
      'variants',
      'color-modes',
      'migrating-from-fannypack',
    ],
  },
  { 'the-box-primitive': ['box', 'flex', 'style-props', 'alignment', 'altitudes', 'borders', 'border-radius'] },
  { hooks: [] },
  { 'page-shells': ['intro', 'page-with-header', 'page-with-sidebar', 'page-content'] },
  { layout: [] },
  { typography: [] },
  { components: [] },
  { form: ['form-libraries'] },
  { utilities: [] },
  { addons: [] },
];

export default function DocsSidebar() {
  return <Sidebar orders={orders} items={[]} path={''} />;
}
