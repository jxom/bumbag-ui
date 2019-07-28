// TODO:
// - Add "Open with Playroom" button
// - Add copy button
// - LiveEditor theming

import * as React from 'react';
import {
  LiveProvider as _LiveProvider,
  LiveEditor as _LiveEditor,
  LiveError as _LiveError,
  LivePreview as _LivePreview
} from 'react-live';
import * as fannypack from 'fannypack';
import { Box, palette, styled } from 'fannypack';

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

const theme = {
  plain: {
    color: '#F8F8F2',
    backgroundColor: '#282A36'
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: {
        color: 'rgb(189, 147, 249)'
      }
    },
    {
      types: ['inserted', 'function'],
      style: {
        color: 'rgb(80, 250, 123)'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(255, 184, 108)'
      }
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        color: 'rgb(248, 248, 242)'
      }
    },
    {
      types: ['string', 'char', 'tag', 'selector'],
      style: {
        color: 'rgb(255, 121, 198)'
      }
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: 'rgb(189, 147, 249)'
      }
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(98, 114, 164)'
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(241, 250, 140)'
      }
    }
  ]
};

const REG = /language\-\jsx-live/ // eslint-disable-line

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
  const scope = React.useMemo(
    () => ({
      ...fannypack
    }),
    []
  );

  const isLive = match.test(props.className);
  const Comp = Pre || Fallback || 'pre';
  if (!isLive) {
    const lang = (props.className || '').split('-')[1];

    if (typeof children !== 'string') {
      return null;
    }
    return (
      // @ts-ignore
      <Comp {...props} lang={lang}>
        {children.replace(/\n$/, '')}
      </Comp>
    );
  }

  const code = React.Children.toArray(children)
    .join('\n')
    .replace(/\s$/, '');

  const noInline = props.className.includes('noInline');

  return (
    <LiveProvider code={code} scope={scope} theme={theme} noInline={noInline} {...props}>
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  );
}
