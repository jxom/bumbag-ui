import * as React from 'react';
import {
  LiveProvider,
  LiveEditor as _LiveEditor,
  LiveError as _LiveError,
  LivePreview as _LivePreview
} from 'react-live';
import * as fannypack from 'fannypack';
import HighlightedCode, { highlightedCodeStyles } from 'fannypack-addon-highlighted-code';
import { palette, space, styled } from 'fannypack';
import base64url from 'base64-url';
import CopyToClipboard from 'react-copy-to-clipboard';

const Actions = styled(fannypack.Box)`
  background-color: ${palette('white')};
  border: 1px solid ${palette('white800')};
  border-top: none;
  padding: ${space(2)}rem ${space(4)}rem;
`;
const LiveEditor = styled(_LiveEditor)`
  font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace !important;
  padding: 1rem !important;

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
  border: 1px solid ${palette('white800')} !important;
  border-bottom: none !important;
  padding: 1.5rem !important;
`;

const REG = /language\-\jsx-live/; // eslint-disable-line

type Props = {
  className?: string;
  pre?: React.ReactElement<any>;
  fallback?: React.ReactElement<any>;
  match?: RegExp;
  children: React.ReactNode | string;
};

LiveCode.defaultProps = {
  mountStylesheet: false,
  transformCode: src => `<React.Fragment>${src}</React.Fragment>`
};

export default function LiveCode({ pre: Pre, fallback: Fallback, match = REG, children, ...props }: Props) {
  const theme = React.useContext(fannypack.ThemeContext);
  const scope = React.useMemo(
    () => ({
      ...fannypack,
      HighlightedCode
    }),
    []
  );

  const isLive = match.test(props.className);
  if (!isLive) {
    const lang = (props.className || '').split('-')[1];

    if (typeof children !== 'string') {
      return null;
    }
    return (
      // @ts-ignore
      <HighlightedCode {...props} marginBottom="major-4" isBlock code={children.replace(/\n$/, '')} language={lang} />
    );
  }

  const code = React.Children.toArray(children)
    .join('\n')
    .replace(/\s$/, '');

  const playroomUrl = React.useMemo(() => {
    return `/playroom/#?code=${code ? base64url.encode(code) : ''}`;
  }, [code]);

  function handleClickPlayroom() {
    window.open(playroomUrl, '_blank');
  }

  const noInline = props.className.includes('noInline');

  const codeTheme = highlightedCodeStyles.codeTheme({ theme });

  return (
    <fannypack.Box marginBottom="major-4">
      <LiveProvider code={code} scope={scope} noInline={noInline} theme={codeTheme} {...props}>
        <LivePreview />
        <LiveEditor />
        <Actions>
          <CopyToClipboard text={code}>
            <fannypack.Button palette="primary" kind="ghost" size="small">Copy</fannypack.Button>
          </CopyToClipboard>
          <fannypack.Button palette="primary" kind="ghost" size="small" onClick={handleClickPlayroom}>Open in Playroom</fannypack.Button>
        </Actions>
        <LiveError />
      </LiveProvider>
    </fannypack.Box>
  );
}
