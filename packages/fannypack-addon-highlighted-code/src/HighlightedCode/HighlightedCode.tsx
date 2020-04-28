import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import Highlight, { defaultProps } from 'prism-react-renderer';

import { Box, BoxProps } from 'fannypack/Box';
import { ThemeContext } from 'fannypack/styled';
import { HighlightedCodeThemeConfig } from 'fannypack/types';
import { useClassName, createComponent, createElement } from 'fannypack/utils';

import * as styles from './styles';

export type LocalHighlightedCodeProps = {
  /** The code to be placed into the highlighted code area. */
  code?: string;
  /** Language of the code. */
  language?: string;
  /** Should the code appear as a block? */
  isBlock?: boolean;
  preProps?: Object;
  lineProps?: Object;
  tokenProps?: Object;
  wrapperProps?: Object;
};
export type HighlightedCodeProps = BoxProps & LocalHighlightedCodeProps;

function useProps(props: Partial<HighlightedCodeProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.HighlightedCode,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const HighlightedCode = createComponent<HighlightedCodeProps>(
  props => {
    const theme = React.useContext(ThemeContext);
    const codeTheme = styles.codeTheme({ theme, ...props });
    const HighlightedCodeProps = useProps(props);
    return createElement({
      children: (
        <Highlight
          {...defaultProps}
          code={props.code}
          // @ts-ignore
          language={props.language}
          theme={codeTheme}
          {...props.wrapperProps}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <styles.Pre
              isBlock={props.isBlock}
              className={className}
              style={style}
              overrides={props.overrides}
              {...props.preProps}
            >
              {tokens.map((line, i) => (
                <styles.Line
                  key={i}
                  isBlock={props.isBlock}
                  {...getLineProps({ line, key: i })}
                  overrides={props.overrides}
                  {...props.lineProps}
                >
                  {line.map((token, key) => (
                    <styles.Token
                      key={key}
                      {...getTokenProps({ token, key })}
                      overrides={props.overrides}
                      {...props.tokenProps}
                    />
                  ))}
                </styles.Line>
              ))}
            </styles.Pre>
          )}
        </Highlight>
      ),
      component: ReakitBox,
      htmlProps: HighlightedCodeProps
    });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      code: '',
      language: 'javascript',
      preProps: {},
      lineProps: {},
      tokenProps: {},
      wrapperProps: {}
    },
    themeKey: 'HighlightedCode'
  }
);
