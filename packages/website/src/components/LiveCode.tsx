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
const CodeTabs = styled(fannypack.Box)`
  background-color: ${palette('white')};
  border: 1px solid ${palette('white800')};
  border-bottom: none;
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
  overflow: scroll !important;
`;

const JSX_REG = /language\-\jsx-live/; // eslint-disable-line
const FC_REG = /language\-function-live/; // eslint-disable-line
const LIVE_REG = /language\-live/; // eslint-disable-line

type Props = {
  className?: string;
  pre?: React.ReactElement<any>;
  fallback?: React.ReactElement<any>;
  match?: RegExp;
  children: React.ReactNode | string;
};

LiveCode.defaultProps = {
  mountStylesheet: false
};

export default function LiveCode(props: Props) {
  const { pre: Pre, fallback: Fallback, children, ...restProps } = props;
  const theme = React.useContext(fannypack.ThemeContext);
  const scope = React.useMemo(
    () => ({
      ...fannypack,
      HighlightedCode
    }),
    []
  );

  const codeTabs: Array<{ code?: string; transformCode?: (src: any) => string; tab?: string }> = React.useMemo(
    () => getCodeTabs(props),
    [props]
  );
  const [currentTab, setCurrentTab] = React.useState(codeTabs[0]);

  const { code, transformCode } = currentTab;

  const playroomUrl = React.useMemo(() => {
    return `/playroom/#?code=${code ? base64url.encode(code) : ''}`;
  }, [code]);

  const isLive = JSX_REG.test(props.className) || FC_REG.test(props.className) || LIVE_REG.test(props.className);
  if (!isLive) {
    const lang = (props.className || '').split('-')[1];

    if (typeof children !== 'string') {
      return null;
    }
    return (
      // @ts-ignore
      <HighlightedCode {...restProps} marginBottom="major-4" isBlock code={children.replace(/\n$/, '')} language="js" />
    );
  }

  function handleClickPlayroom() {
    window.open(playroomUrl, '_blank');
  }

  const noInline = props.className.includes('noInline');

  const codeTheme = highlightedCodeStyles.codeTheme({ theme });

  return (
    <fannypack.Box marginBottom="major-4">
      <LiveProvider
        code={code}
        scope={scope}
        noInline={noInline}
        theme={codeTheme}
        transformCode={transformCode}
        {...props}
      >
        <LivePreview />
        {codeTabs.length > 1 && (
          <CodeTabs>
            {codeTabs.map((codeTab, i) => (
              <fannypack.Button
                key={i}
                onClick={() => setCurrentTab(codeTab)}
                palette="primary"
                variant={currentTab.tab === codeTab.tab ? undefined : 'ghost'}
                marginRight="major-1"
                size="small"
              >
                {codeTab.tab}
              </fannypack.Button>
            ))}
          </CodeTabs>
        )}
        <LiveEditor />
        <Actions>
          <CopyToClipboard text={code}>
            <fannypack.Button palette="primary" variant="ghost" size="small">
              Copy
            </fannypack.Button>
          </CopyToClipboard>
          <fannypack.Button palette="primary" variant="ghost" size="small" onClick={handleClickPlayroom}>
            Open in Playroom
          </fannypack.Button>
        </Actions>
        <LiveError />
      </LiveProvider>
    </fannypack.Box>
  );
}

function getCodeTabs(props) {
  const getTransformCode = string => {
    return JSX_REG.test(string)
      ? src => `<React.Fragment><Stack spacing="major-1">${src}</Stack></React.Fragment>`
      : undefined;
  };
  const code = React.Children.toArray(props.children)
    .join('\n')
    .replace(/\s$/, '');
  if (LIVE_REG.test(props.className) && code.includes('###')) {
    const codeSegments = code
      .split('###')
      .filter(Boolean)
      .filter(segment => segment.split('').some(char => char !== '\n'));
    const codeTabs = codeSegments.map(segment => {
      const [metaString, ...parts] = segment.split(/\n/);
      const meta = metaString.split(',').reduce((meta, metaPart) => {
        const [key, value] = metaPart.split('=');
        return { ...meta, [key]: value };
      }, {});
      return {
        ...meta,
        code: parts.join('\n'),
        // @ts-ignore
        transformCode: getTransformCode(meta.type)
      };
    });
    return codeTabs;
  }
  return [
    {
      tab: undefined,
      code,
      transformCode: getTransformCode(props.className)
    }
  ];
}
