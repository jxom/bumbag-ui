import React from 'react';
import {
  LiveProvider as _LiveProvider,
  LivePreview as _LivePreview,
  LiveEditor as _LiveEditor,
  LiveError as _LiveError
} from 'react-live';
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider';
import base64url from 'base64-url';

import { Box, Button, palette, styled } from 'fannypack';

const LiveEditor = styled(_LiveEditor)`
  font-family: Menlo, monospace;
  padding: 1.5em;
  margin: 0;
  background-color: ${palette('white700')};
  overflow-x: auto;
  outline: none;
`;
const LiveError = styled(_LiveError)`
  font-family: Menlo, monospace;
  padding: 1em;
  margin: 0;
  background-color: ${palette('danger')};
  color: ${palette('dangerInverted')};
  overflow-x: auto;
`;
const LivePreview = styled(_LivePreview)`
  padding: 1.5em;
`;
const LiveProvider = styled(_LiveProvider)`
  border: 1px solid ${palette('white700')};
  border-radius: 2;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const LiveCode = withMDXComponents(({ components, scope, ...props }) => {
  const [code, setCode] = React.useState(props.code);

  const playroomUrl = React.useMemo(() => {
    return `/playroom/#?code=${code ? base64url.encode(code) : ''}`;
  }, [code]);

  function handleClickPlayroom() {
    window.open(playroomUrl, '_blank');
  }

  return (
    <Box marginBottom="major-4">
      <LiveProvider
        scope={{
          ...components,
          ...scope
        }}
        {...props}
        code={code}
      >
        <LivePreview />
        <Box relative>
          <Box absolute top="0.25rem" right="0.25rem">
            <Button kind="ghost" palette="primary" size="small">
              Copy
            </Button>
            <Button kind="ghost" palette="primary" size="small" onClick={handleClickPlayroom}>
              Playroom
            </Button>
          </Box>
          <LiveEditor onChange={setCode} />
        </Box>
        <LiveError />
      </LiveProvider>
    </Box>
  );
});

LiveCode.defaultProps = {
  mountStylesheet: false,
  transformCode: src => `<React.Fragment>${src}</React.Fragment>`
};

const REG = /language\-\.jsx/;

export const MDXLive = ({ pre: Pre, fallback: Fallback, match = REG, children, metaString, ...props }) => {
  const isLive = match.test(props.className);
  const Comp = Pre || Fallback;
  if (!isLive) {
    const lang = (props.className || '').split('-')[1];
    return (
      <Comp {...props} lang={lang}>
        {children.replace(/\n$/, '')}
      </Comp>
    );
  }

  const code = React.Children.toArray(children).join('\n');

  return <LiveCode {...props} code={code} />;
};

export default MDXLive;
