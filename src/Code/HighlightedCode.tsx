import * as React from 'react';
import * as PropTypes from 'prop-types';
import { palette } from 'styled-tools';
// @ts-ignore
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
// @ts-ignore
import defaultTheme from 'react-syntax-highlighter/styles/prism/coy';
// @ts-ignore
import javascript from 'react-syntax-highlighter/languages/prism/javascript';
// @ts-ignore
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
// @ts-ignore
import json from 'react-syntax-highlighter/languages/prism/json';
import _Code from './Code';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { Box } from '../primitives';
import styled, { css } from '../styled';

const Wrapper = styled(Box)<HighlightedCodeProps>`
  ${props =>
    props.showLabel &&
    css`
  position: relative;

  &:before {
    color: ${palette('text')};
    content: '${(props: any) => props.lang}';
    font-family: 'SF Mono','Segoe UI Mono','Roboto Mono',Menlo,Courier,monospace;
    font-size: 0.8rem;
    font-weight: bold;
    position: absolute;
    right: 0.5rem;
    top: 0.2rem;
    text-transform: uppercase;
  }
  `};
`;

export type LocalHighlightedCodeProps = {
  children: React.ReactNode;
  className?: string;
  codeClassName?: string;
  isBlock?: boolean;
  lang: string;
  showLabel?: boolean;
  showLineNumbers?: boolean;
};
export type HighlightedCodeProps = LocalHighlightedCodeProps & ReakitBoxProps;

export class HighlightedCode extends React.PureComponent<LocalHighlightedCodeProps> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    codeClassName: PropTypes.string,
    isBlock: PropTypes.bool,
    lang: PropTypes.string.isRequired,
    showLabel: PropTypes.bool,
    showLineNumbers: PropTypes.bool
  };

  static defaultProps = {
    className: undefined,
    codeClassName: undefined,
    isBlock: false,
    showLabel: false,
    showLineNumbers: false
  };

  componentDidMount = () => {
    registerLanguage('javascript', javascript);
    registerLanguage('jsx', jsx);
    registerLanguage('json', json);
  };

  render = () => {
    const { children, className, codeClassName, isBlock, lang, showLineNumbers, ...props } = this.props;
    return (
      <Wrapper lang={lang} {...props}>
        <SyntaxHighlighter
          className={className}
          codeClassName={codeClassName}
          block={isBlock}
          language={lang}
          showLineNumbers={showLineNumbers}
          style={defaultTheme}
          PreTag={_Code}
          wrapLines
        >
          {children}
        </SyntaxHighlighter>
      </Wrapper>
    );
  };
}

// @ts-ignore
const C: React.FunctionComponent<HighlightedCodeProps> = HighlightedCode;
export default C;
