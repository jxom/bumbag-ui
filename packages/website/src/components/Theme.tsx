import * as React from 'react';
import { Box, Heading } from 'fannypack';
import _set from 'lodash/set';

export default function Theme(props) {
  const { component: Component, children, overrides } = props;
  return overrides.map(override => {
    let key = typeof override === 'object' ? override.key : override;

    const localKey = key
      .split('.')
      .slice(1)
      .join('.');

    let components = Array.isArray(override.props) ? override.props : [override.props];

    let overrides = {};
    _set(overrides, localKey, { backgroundColor: '#ffe3a4' });

    return (
      // @ts-ignore
      <Box key={key} marginBottom="major-4">
        <Box>
          <Heading use="h3" fontSize="300">
            <strong>
              <code>{key}</code>
            </strong>
          </Heading>
        </Box>
        {override.description && <Box>{override.description}</Box>}
        <Box>
          {components.map((props, i) => (
            <Component key={i} overrides={overrides} {...props}>
              {' '}
              {/* eslint-disable-line */}
              {children}
            </Component>
          ))}
        </Box>
      </Box>
    );
  });
}
