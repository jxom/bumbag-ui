import { Box } from 'bumbag/Box';
import { Code } from 'bumbag/Code';
import { Text } from 'bumbag/Text';
import { css, cssClass, styled } from 'bumbag/styled';
import { palette, space, theme } from 'bumbag/utils';

export const Token = styled(Text)`
  & {
    ${theme('HighlightedCode.Token.styles.base')};
  }
`;

export const Pre = styled(Code)<{ isBlock?: boolean }>`
  overflow-x: auto;

  ${(props) =>
    !props.isBlock &&
    css`
      display: inline;
    `};

  & {
    ${theme('HighlightedCode.Pre.styles.base')};
  }
`;

export const Line = styled(Box)<{ isBlock?: boolean }>`
  ${(props) =>
    !props.isBlock &&
    css`
      display: inline;
    `};

  & {
    ${theme('HighlightedCode.Line.styles.base')};
  }
`;

export const HighlightedCode = (styleProps) => cssClass`
  ${
    styleProps.isBlock &&
    css`
      & {
        ${theme('HighlightedCode.styles.block')(styleProps)};
      }
    `
  };

  & {
    ${theme('HighlightedCode.styles.base')(styleProps)};
  };
`;

export const codeTheme = (styleProps) => ({
  default: {
    plain: {
      color: palette('text')(styleProps),
      backgroundColor: palette('white700')(styleProps),
    },
    styles: [
      {
        types: ['changed'],
        style: {
          color: palette('info')(styleProps),
        },
      },
      {
        types: ['deleted'],
        style: {
          color: palette('danger')(styleProps),
        },
      },
      {
        types: ['inserted', 'attr-name'],
        style: {
          color: palette('secondary')(styleProps),
        },
      },
      {
        types: ['attr-value'],
        style: {
          color: palette('text')(styleProps),
        },
      },
      {
        types: ['comment'],
        style: {
          color: palette('gray400')(styleProps),
        },
      },
      {
        types: ['builtin', 'char', 'url'],
        style: {
          color: palette('secondary')(styleProps),
        },
      },
      {
        types: ['string'],
        style: {
          color: palette('text')(styleProps),
        },
      },
      {
        types: ['variable'],
        style: {
          color: palette('info')(styleProps),
        },
      },
      {
        types: ['number'],
        style: {
          color: palette('info')(styleProps),
        },
      },
      {
        // This was manually added after the auto-generation
        // so that punctuations are not italicised
        types: ['punctuation'],
        style: {
          color: palette('primary')(styleProps),
        },
      },
      {
        types: ['function', 'selector', 'doctype'],
        style: {
          color: palette('secondary')(styleProps),
        },
      },
      {
        types: ['class-name', 'maybe-class-name'],
        style: {
          color: palette('primary')(styleProps),
        },
      },
      {
        types: ['tag'],
        style: {
          color: palette('primary')(styleProps),
        },
      },
      {
        types: ['operator', 'property', 'keyword', 'namespace'],
        style: {
          color: palette('primary')(styleProps),
        },
      },
      {
        types: ['boolean'],
        style: {
          color: palette('info')(styleProps),
        },
      },
    ],
  },
  dark: {
    plain: {
      color: palette('white')(styleProps),
      backgroundColor: '#0e0c27',
    },
    styles: [
      {
        types: ['changed'],
        style: {
          color: palette('info')(styleProps),
        },
      },
      {
        types: ['deleted'],
        style: {
          color: palette('danger')(styleProps),
        },
      },
      {
        types: ['inserted', 'attr-name'],
        style: {
          color: palette('secondary300')(styleProps),
        },
      },
      {
        types: ['attr-value'],
        style: {
          color: palette('white')(styleProps),
        },
      },
      {
        types: ['comment'],
        style: {
          color: palette('gray400')(styleProps),
        },
      },
      {
        types: ['builtin', 'char', 'url'],
        style: {
          color: palette('secondary300')(styleProps),
        },
      },
      {
        types: ['string'],
        style: {
          color: palette('white')(styleProps),
        },
      },
      {
        types: ['variable'],
        style: {
          color: palette('info')(styleProps),
        },
      },
      {
        types: ['number'],
        style: {
          color: palette('white')(styleProps),
        },
      },
      {
        // This was manually added after the auto-generation
        // so that punctuations are not italicised
        types: ['punctuation'],
        style: {
          color: palette('primary300')(styleProps),
        },
      },
      {
        types: ['function', 'selector', 'doctype'],
        style: {
          color: palette('secondary300')(styleProps),
        },
      },
      {
        types: ['class-name', 'maybe-class-name'],
        style: {
          color: palette('primary300')(styleProps),
        },
      },
      {
        types: ['tag'],
        style: {
          color: palette('primary300')(styleProps),
        },
      },
      {
        types: ['operator', 'property', 'keyword', 'namespace'],
        style: {
          color: palette('primary300')(styleProps),
        },
      },
      {
        types: ['boolean'],
        style: {
          color: palette('white')(styleProps),
        },
      },
    ],
  },
});
