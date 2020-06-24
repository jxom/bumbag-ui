import { css, palette } from 'fannypack';

export default {
  css: {
    root: props => css`
      background-color: ${palette('primary800')(props)}
    `
  },
  Level: {
    Title: {
      css: {
        root: css`
          color: white
        `
      }
    }
  },
  Item: {
    css: {
      root: props => css`
        && {
          color: white !important;
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
              color: white;
            `
          };

          &:hover {
            background-color: ${palette('primary700')(props)};
            color: white;
          }

          &:focus {
            outline: none;
            background-color: ${palette('primary700')(props)};
          }
        }
      `
    }
  }
}
