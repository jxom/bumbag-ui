import * as React from 'react';
import {
  LiveProvider,
  LiveEditor as _LiveEditor,
  LiveError as _LiveError,
  LivePreview as _LivePreview,
} from 'react-live';
import * as fannypack from 'fannypack';
import { HighlightedCode, highlightedCodeStyles } from 'fannypack-addon-highlighted-code';
import { Markdown } from 'fannypack-addon-markdown';
import { Box, Group, palette, space, styled } from 'fannypack';
import base64url from 'base64-url';
import CopyToClipboard from 'react-copy-to-clipboard';

const Actions = styled(fannypack.Box)`
  background-color: ${palette('white')};
  border: 1px solid ${palette('white800')};
  border-left: none;
  border-top: none;
  padding: ${space(2)}rem ${space(4)}rem;
`;
const LiveEditor = styled(_LiveEditor)`
  font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace !important;
  padding: 1rem !important;
  height: 100%;
  flex: 3;

  & textarea {
    padding: 1rem !important;
  }
  & pre {
    padding: 0 !important;
  }
  margin: 0 !important;
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
  padding: 1.5rem !important;
  border-left: none;
  /* overflow: scroll !important; */
`;

type Props = {
  className?: string;
  code: string;
  match?: RegExp;
};

LiveCode.defaultProps = {
  mountStylesheet: false,
};

export default function LiveCode(props: Props) {
  const { code, ...restProps } = props;
  const { theme } = fannypack.useTheme();
  const scope = React.useMemo(
    () => ({
      ...fannypack,
      HighlightedCode,
      Markdown,
    }),
    []
  );

  const playroomUrl = React.useMemo(() => {
    return `/playroom/#?code=${code ? base64url.encode(code) : ''}`;
  }, [code]);

  function handleClickPlayroom() {
    window.open(playroomUrl, '_blank');
  }

  const codeTheme = highlightedCodeStyles.codeTheme({ theme }).dark;

  return (
    <fannypack.Box marginBottom="major-4">
      <LiveProvider code={code} scope={scope} theme={codeTheme} {...props}>
        <Group borderRadius="10px" width="100%" verticalBelow="fullHD">
          <LiveEditor />
          <Box flex="2" border="default" borderLeft="none">
            <LivePreview />
          </Box>
        </Group>
        <LiveError />
      </LiveProvider>
    </fannypack.Box>
  );
}
