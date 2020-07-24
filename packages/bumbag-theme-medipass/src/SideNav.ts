import { css, palette } from 'bumbag';

export default {
  styles: {
    base: (props) => css`
      background-color: ${palette('primary800')(props)};
    `,
  },
  Level: {
    Title: {
      styles: {
        base: (styleProps) => css`
          color: ${palette('white')(styleProps)};
        `,
      },
    },
  },
  Item: {
    styles: {
      base: (props) => css`
        && {
          color: ${palette('white')(props)} !important;
          align-items: center;
          border-color: ${palette('primary')(props)};
          color: #e7e5e1;
          display: flex;
          height: 40px;
          text-transform: uppercase;
          text-decoration: none;

          ${props.isActive &&
          css`
            background-color: ${palette('primary700')(props)};
            color: ${palette('white')(props)};
          `};

          &:hover {
            background-color: ${palette('primary700')(props)};
            color: ${palette('white')(props)};
          }

          &:focus {
            outline: none;
            background-color: ${palette('primary700')(props)};
          }
        }
      `,
    },
  },
};
