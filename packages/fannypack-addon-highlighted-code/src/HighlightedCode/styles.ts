import { Box } from 'fannypack/Box';
import { Code } from 'fannypack/Code';
import { Text } from 'fannypack/Text';
import { css, cssClass, styled } from 'fannypack/styled';
import { palette, space, theme } from 'fannypack/utils';

export const Token = styled(Text)`
  & {
    ${theme('HighlightedCode.Token.base')};
  }
`;

export const Pre = styled(Code)<{ isBlock?: boolean }>`
  ${props =>
    !props.isBlock &&
    css`
      display: inline;
    `};

  & {
    ${theme('HighlightedCode.Pre.base')};
  }
`;

export const Line = styled(Box)<{ isBlock?: boolean }>`
  ${props =>
    !props.isBlock &&
    css`
      display: inline;
    `};

  & {
    ${theme('HighlightedCode.Line.base')};
  }
`;

export const HighlightedCode = styleProps => cssClass`
  ${styleProps.isBlock &&
    css`
      & {
        ${theme('HighlightedCode.block')(styleProps)};
      }
    `};

  & {
    ${theme('HighlightedCode.base')(styleProps)};
  };
`;

export const codeTheme = styleProps => ({
  plain: {
    color: palette('text')(styleProps),
    backgroundColor: palette('white700')(styleProps)
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: palette('info')(styleProps)
      }
    },
    {
      types: ['deleted'],
      style: {
        color: palette('danger')(styleProps)
      }
    },
    {
      types: ['inserted', 'attr-name'],
      style: {
        color: palette('secondary')(styleProps)
      }
    },
    {
      types: ['attr-value'],
      style: {
        color: palette('text')(styleProps)
      }
    },
    {
      types: ['comment'],
      style: {
        color: palette('gray400')(styleProps)
      }
    },
    {
      types: ['builtin', 'char', 'constant', 'url'],
      style: {
        color: palette('secondary')(styleProps)
      }
    },
    {
      types: ['string'],
      style: {
        color: palette('text')(styleProps)
      }
    },
    {
      types: ['variable'],
      style: {
        color: palette('info')(styleProps)
      }
    },
    {
      types: ['number'],
      style: {
        color: palette('info')(styleProps)
      }
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ['punctuation'],
      style: {
        color: palette('primary')(styleProps)
      }
    },
    {
      types: ['function', 'selector', 'doctype'],
      style: {
        color: palette('primary')(styleProps)
      }
    },
    {
      types: ['class-name'],
      style: {
        color: palette('primary')(styleProps)
      }
    },
    {
      types: ['tag'],
      style: {
        color: palette('primary')(styleProps)
      }
    },
    {
      types: ['operator', 'property', 'keyword', 'namespace'],
      style: {
        color: palette('primary')(styleProps)
      }
    },
    {
      types: ['boolean'],
      style: {
        color: palette('info')(styleProps)
      }
    }
  ]
});
