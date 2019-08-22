import * as React from 'react';
import { Box, Code, Text } from 'fannypack';
import _set from 'lodash/set';

export default function Theme(props) {
  const { component: Component, children, overrides, injectOverrides = true } = props;
  return overrides.map(override => {
    let key = typeof override === 'object' ? override.key : override;

    let components = Array.isArray(override.props) ? override.props : [override.props];

    let overrides = {};
    _set(overrides, key, { backgroundColor: '#ffe3a4 !important' });

    return (
      // @ts-ignore
      <Box key={key} marginBottom="major-4">
        <Box>
          <Text fontWeight="bold">
            <Code>{key}</Code>
          </Text>
        </Box>
        {override.description && <Box marginTop="major-1">{override.description}</Box>}
        <Box marginTop="major-1">
          {components.map((props, i) => {
            const newChildren = props && props.children ? props.children : children;
            return (
              <Component key={i} overrides={injectOverrides ? overrides : undefined} {...props}>
                {/* eslint-disable-line */}
                {typeof newChildren === 'function' ? newChildren({ overrides, ...props }) : newChildren}
              </Component>
            );
          })}
        </Box>
      </Box>
    );
  });
}
