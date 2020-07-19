import * as React from 'react';
import { Navigation, Link, List } from '../../';

export default { title: 'Navigation' };

export const _default = () => (
  <Navigation aria-label="External links">
    <List>
      <List.Item>
        <Link href="https://google.com">Google</Link>
      </List.Item>
      <List.Item>
        <Link href="https://github.com">GitHub</Link>
      </List.Item>
    </List>
  </Navigation>
);
