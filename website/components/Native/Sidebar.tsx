import * as React from 'react';

import mdxFiles from '../../mdx-manifest.json';
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
  const items = mdxFiles.reduce((currentItems, file) => {
    const item = file;
    if (item.platform !== 'native') return currentItems;
    let relativeDirectory = (item.relativeDirectory || '').replace('native/', '').replace('native', '').slice(1);
    return { ...currentItems, [relativeDirectory]: [...(currentItems[relativeDirectory] || []), item] };
  }, {});
  return <Sidebar orders={orders} items={items} path={''} />;
}
