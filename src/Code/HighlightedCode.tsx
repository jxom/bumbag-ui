import * as React from 'react';
// @ts-ignore
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
// @ts-ignore
import defaultTheme from 'react-syntax-highlighter/styles/prism/atom-dark';
// @ts-ignore
import javascript from 'react-syntax-highlighter/languages/prism/javascript';
// @ts-ignore
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import _Code from '@jmoxey/reakit/Code';
import { BoxProps as ReakitBoxProps } from '@jmoxey/reakit/ts';

import { Box } from '../primitives';
import { styled, css } from '../styled';

const Wrapper = styled(Box)<HighlightedCodeProps>`
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
        >
          {children}
        </SyntaxHighlighter>
      </Wrapper>
    );
  };
}

export default HighlightedCode as React.ComponentClass<HighlightedCodeProps>;
