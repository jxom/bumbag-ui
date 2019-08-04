import * as React from 'react';
import { Box } from 'fannypack';
import _set from 'lodash/set';

export default function Theme(props) {
  const { component: Component, children, overrides } = props;
  return overrides.map(override => {
    let key = typeof override === 'object' ? override.key : override;

    const localKey = key
      .split('.')
      .slice(1)
      .join('.');

    let props = {};
    if (typeof override === 'object') {
      if (Array.isArray(override.props)) {
      } else {
        console.log('test2', override);
        props = { ...props, ...override.props };
      }
    }

    let overrides = {};
    _set(overrides, localKey, { backgroundColor: '#ffe3a4' });

    return (
      // @ts-ignore
      <Box key={key}>
        <Box>
          <code>{key}</code>
        </Box>
        <Box>
          <Component overrides={overrides} {...props}>
            {children}
          </Component>
        </Box>
      </Box>
    );
  });
}
