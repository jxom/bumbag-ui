import * as React from 'react';
import { LiveProvider, LiveEditor as _LiveEditor, LiveError as _LiveError } from 'react-live';
import * as bumbag from 'bumbag';
import * as bumbagNative from 'bumbag-native';
import { HighlightedCode, highlightedCodeStyles } from 'bumbag-addon-highlighted-code';
import { Markdown } from 'bumbag-addon-markdown';
import { Picker } from '@bumbag-native/picker';
import { css, palette, space, styled } from 'bumbag';
import base64url from 'base64-url';
import CopyToClipboard from 'react-copy-to-clipboard';

import LivePreview from './LivePreview';

const Actions = styled(bumbag.Box)`
  background-color: ${palette('background')};
  padding: ${space(2)}rem ${space(4)}rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const CodeTabs = styled(bumbag.Box)`
  background-color: ${palette('background')};
  border-top: 1px solid ${palette('white700')};
  padding: ${space(2)}rem ${space(4)}rem;
`;
const LiveEditor = styled(_LiveEditor)`
  font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace !important;
  padding: 1.5rem 1rem !important;

  & textarea {
    padding: 1.5rem 1rem !important;
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
const _LivePreview = styled(LivePreview)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  ${(props) =>
    props.isIframe
      ? css`
          overflow: hidden;
        `
      : css`
          padding: 1.5rem;
        `};
`;

const JSX_GIF_REG = /language\-\jsx-gif/; // eslint-disable-line
const JSX_REG = /language\-\jsx-live/; // eslint-disable-line
const JSX_IFRAME_REG = /language\-\jsx-live-iframe/; // eslint-disable-line
const FC_REG = /language\-function-live/; // eslint-disable-line
const LIVE_REG = /language\-live/; // eslint-disable-line

type Props = {
  className?: string;
  pre?: React.ReactElement<any>;
  fallback?: React.ReactElement<any>;
  match?: RegExp;
  children: React.ReactNode | string;
  platform?: string;
};

LiveCode.defaultProps = {
  mountStylesheet: false,
};

export default function LiveCode(props: Props) {
  const { pre: Pre, fallback: Fallback, children, platform, ...restProps } = props;
  const { theme } = bumbag.useTheme();
  const { colorMode } = bumbag.useColorMode();
  const scope = React.useMemo(
    () => ({
      ...bumbag,
      ...(platform === 'native' ? { ...bumbagNative } : {}),
      // require,
      HighlightedCode,
      Markdown,
      Picker,
    }),
    [platform]
  );

  const codeTabs: Array<{ code?: string; transformCode?: (src: any) => string; tab?: string }> = React.useMemo(
    () => getCodeTabs(props),
    [props]
  );
  const [currentTab, setCurrentTab] = React.useState(codeTabs[0]);

  const { code: defaultCode, transformCode } = currentTab;

  const [code, setCode] = React.useState(defaultCode || '');

  React.useEffect(() => {
    setCode(defaultCode);
  }, [defaultCode]);

  const playroomUrl = React.useMemo(() => {
    return `/playroom/#?code=${code ? base64url.encode(code) : ''}`;
  }, [code]);

  const isLive =
    JSX_REG.test(props.className) ||
    JSX_IFRAME_REG.test(props.className) ||
    FC_REG.test(props.className) ||
    LIVE_REG.test(props.className);
  const isIframe = JSX_IFRAME_REG.test(props.className);
  if (!isLive) {
    const lang = (props.className || '').split('-')[1];

    let imageSrc;
    const isGif = JSX_GIF_REG.test(props.className);
    if (isGif) {
      const matcher = props.className?.match(JSX_GIF_REG)?.[0];
      imageSrc = props.className?.replace(matcher, '');
    }

    if (typeof children !== 'string') {
      return null;
    }
    return (
      <bumbag.Box
        {...restProps}
        overflow="hidden"
        boxShadow="0px 6px 24px 0px rgb(0 0 0 / 30%), 0px 0px 12px 6px rgb(0 0 0 / 2%)"
        borderRadius="16px"
        marginBottom="major-4"
        marginTop="major-4"
      >
        {imageSrc && <bumbag.Image src={imageSrc} maxHeight="major-60" />}
        <HighlightedCode isBlock code={children.replace(/\n$/, '')} language={lang} colorMode="dark" />
      </bumbag.Box>
    );
  }

  function handleClickPlayroom() {
    window.open(playroomUrl, '_blank');
  }

  const noInline = props.className.includes('noInline');

  const codeTheme = highlightedCodeStyles.codeTheme({ theme }).dark;

  return (
    <bumbag.Box altitude="400" borderRadius="16px" overflow="hidden" marginBottom="major-4" marginTop="major-4">
      <LiveProvider
        code={code}
        scope={scope}
        noInline={noInline}
        theme={codeTheme}
        transformCode={transformCode}
        {...props}
      >
        <_LivePreview isIframe={isIframe} code={code} colorMode={colorMode} />
        {codeTabs.length > 1 && (
          <CodeTabs colorMode={colorMode}>
            {codeTabs.map((codeTab, i) => (
              <bumbag.Button
                key={i}
                onClick={() => setCurrentTab(codeTab)}
                palette="primary"
                variant={currentTab.tab === codeTab.tab ? undefined : 'ghost'}
                marginRight="major-1"
                size="small"
              >
                {codeTab.tab}
              </bumbag.Button>
            ))}
          </CodeTabs>
        )}
        <bumbag.Box position="relative">
          <bumbag.Box
            color="primary200"
            zIndex={1}
            fontSize="100"
            fontWeight="500"
            textTransform="uppercase"
            position="absolute"
            top="minor-1"
            textAlign="center"
            width="100%"
          >
            Editable example
          </bumbag.Box>
          <LiveEditor onChange={setCode} code={code} />
        </bumbag.Box>
        <Actions colorMode={colorMode}>
          <bumbag.Level verticalBelow={null}>
            <bumbag.Box>
              <CopyToClipboard text={code}>
                <bumbag.Button iconBefore="solid-clipboard" palette="primary" variant="ghost" size="small">
                  Copy
                </bumbag.Button>
              </CopyToClipboard>
              <bumbag.Button
                iconBefore="solid-pencil-ruler"
                palette="primary"
                variant="ghost"
                size="small"
                onClick={handleClickPlayroom}
              >
                Open in Playroom
              </bumbag.Button>
            </bumbag.Box>
          </bumbag.Level>
        </Actions>
        <LiveError />
      </LiveProvider>
    </bumbag.Box>
  );
}

function getCodeTabs(props) {
  const getTransformCode = (string) => {
    return JSX_REG.test(string)
      ? (src) => `<React.Fragment><Stack spacing="major-1">${src}</Stack></React.Fragment>`
      : undefined;
  };
  const code = React.Children.toArray(props.children).join('\n').replace(/\s$/, '');
  if (LIVE_REG.test(props.className) && code.includes('###')) {
    const codeSegments = code
      .split('###')
      .filter(Boolean)
      .filter((segment) => segment.split('').some((char) => char !== '\n'));
    const codeTabs = codeSegments.map((segment) => {
      const [metaString, ...parts] = segment.split(/\n/);
      const meta = metaString.split(',').reduce((meta, metaPart) => {
        const [key, value] = metaPart.split('=');
        return { ...meta, [key]: value };
      }, {});
      return {
        ...meta,
        code: parts.join('\n'),
        // @ts-ignore
        transformCode: getTransformCode(meta.type),
      };
    });
    return codeTabs;
  }
  return [
    {
      tab: undefined,
      code,
      transformCode: getTransformCode(props.className),
    },
  ];
}
