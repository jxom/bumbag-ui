import * as React from 'react';
import { Box, Button, Code, Disclosure, Text } from 'fannypack';
import HighlightedCode, { highlightedCodeStyles } from 'fannypack-addon-highlighted-code';
import _set from 'lodash/set';

export default function Theme(props) {
  const { component: Component, children, overrides, highlightAttribute, injectOverrides = true, ...restProps } = props;
  return overrides.map(override => {
    let key = typeof override === 'object' ? override.key : override;

    let components = Array.isArray(override.props) ? override.props : [override.props];

    let overrides = {};
    _set(overrides, key, {
      [highlightAttribute || override.highlightAttribute || 'background']: '#ffe3a4 !important'
    });

    let themeObject = {};
    _set(themeObject, key, { background: '#ffe3a4' });
    const themeExample = `import { ThemeProvider } from 'fannypack';

const theme = ${JSON.stringify(themeObject, null, 2).replace(/\"([^(\")"]+)\":/g, '$1:')}

<ThemeProvider theme={theme}>...</ThemeProvider>`;

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
            return React.createElement(
              Component,
              { key: i, overrides: injectOverrides ? overrides : undefined, ...restProps, ...props }, // eslint-disable-line
              typeof newChildren === 'function' ? newChildren({ overrides, ...props }) : newChildren
            );
          })}
        </Box>
        <Disclosure.State>
          {disclosure => (
            <React.Fragment>
              <Disclosure {...disclosure}>
                {props => (
                  <Button marginTop="major-1" kind="ghost" palette="primary" size="small" {...props}>
                    {disclosure.visible ? 'Hide' : 'Show'} example
                  </Button>
                )}
              </Disclosure>
              <Disclosure.Region {...disclosure}>
                <HighlightedCode marginTop="major-1" isBlock code={themeExample} language="js" />
              </Disclosure.Region>
            </React.Fragment>
          )}
        </Disclosure.State>
      </Box>
    );
  });
}
