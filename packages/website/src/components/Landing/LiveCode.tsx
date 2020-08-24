import * as React from 'react';
import {
  LiveProvider,
  LiveEditor as _LiveEditor,
  LiveError as _LiveError,
  LivePreview as _LivePreview,
} from 'react-live';
import * as bumbag from 'bumbag';
import { HighlightedCode, highlightedCodeStyles } from 'bumbag-addon-highlighted-code';
import { Markdown } from 'bumbag-addon-markdown';
import { Box, Group, palette, space, styled } from 'bumbag';
import base64url from 'base64-url';

const Actions = styled(bumbag.Box)`
  background-color: ${palette('background')};
  border: 1px solid ${palette('white800', { dark: 'gray700' })};
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
  const { theme } = bumbag.useTheme();
  const { colorMode } = bumbag.useColorMode();
  const scope = React.useMemo(
    () => ({
      ...bumbag,
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
    <bumbag.Box marginBottom="major-4">
      <LiveProvider code={code} scope={scope} theme={codeTheme} {...props}>
        <Group altitude="400" borderRadius="10px" width="100%" verticalBelow="widescreen">
          <LiveEditor colorMode={colorMode} />
          <Box backgroundColor="white" flex="2" border="default" borderLeft="none">
            <LivePreview colorMode={colorMode} />
          </Box>
        </Group>
        <LiveError />
      </LiveProvider>
    </bumbag.Box>
  );
}
