import * as React from 'react';
import { Box } from 'fannypack';
import _set from 'lodash/set';

export default function Theme(props) {
  const { component: Component, children, overrides } = props;
  return overrides.map(key => {
    const localKey = key
      .split('.')
      .slice(1)
      .join('.');

    let overrides = {};
    _set(overrides, localKey, { backgroundColor: '#ffe3a4' });

    return (
      // @ts-ignore
      <Box key={key}>
        <Box>
          <code>{key}</code>
        </Box>
        <Box>
          <Component overrides={overrides}>{children}</Component>
        </Box>
      </Box>
    );
  });
}
