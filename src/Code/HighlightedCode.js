// @flow
import React, { PureComponent, type Node } from 'react';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import defaultTheme from 'react-syntax-highlighter/styles/prism/atom-dark';
import javascript from 'react-syntax-highlighter/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import Box from 'reakit/Box';
import _Code from 'reakit/Code';
import styled, { css } from 'reakit/styled';

const Wrapper = styled(Box)`
  ${props =>
    props.showLabel &&
    css`
  position: relative;

  &:before {
    color: #e4e4e4;
    content: '${props => props.lang}';
    font-family: 'SF Mono','Segoe UI Mono','Roboto Mono',Menlo,Courier,monospace;
    font-size: 0.8rem;
    font-weight: bold;
    position: absolute;
    right: 0.6rem;
    top: 0.2rem;
    text-transform: uppercase;
  }
  `};
`;

type Props = {
  children: Node,
  className?: string,
  codeClassName?: string,
  isBlock?: boolean,
  lang: string,
  showLabel?: boolean,
  showLineNumbers?: boolean
};

export default class Code extends PureComponent<Props> {
  static defaultProps = {
    className: null,
    codeClassName: null,
    isBlock: false,
    lang: null,
    showLabel: false,
    showLineNumbers: false
  };

  componentDidMount = () => {
    registerLanguage('javascript', javascript);
    registerLanguage('jsx', jsx);
  };

  render = () => {
    const { children, className, codeClassName, isBlock, lang, showLabel, showLineNumbers, ...props } = this.props;
    return (
      <Wrapper lang={lang} showLabel={showLabel} {...props}>
        <SyntaxHighlighter
          className={className}
          codeClassName={codeClassName}
          block={isBlock}
          language={lang}
          showLineNumbers={showLineNumbers}
          style={defaultTheme}
          PreTag={_Code}
        >
          {children}
        </SyntaxHighlighter>
      </Wrapper>
    );
  };
}
