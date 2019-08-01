import * as React from 'react';
import { Box } from 'fannypack';
import _set from 'lodash/set';

export default function Theme(props) {
  const { element, keys } = props;
  return keys.map(key => {
    const localKey = key
      .split('.')
      .slice(1)
      .join('.');

    let overrides = {};
    _set(overrides, localKey, { backgroundColor: '#ffe3a4' });
    const newElement = React.cloneElement(element, { overrides });

    return (
      // @ts-ignore
      <Box key={key}>
        <Box>
          <code>{key}</code>
        </Box>
        <Box>{newElement}</Box>
      </Box>
    );
  });
}
