import { css, palette, space } from '../../styled';
import { isInteractive } from '../../Button/styled';

export default {
  ActionButton: {
    base: css`
      height: ${space(2)}rem;
    `
  },
  Button: {
    base: css`
      border: 1px solid #bdbdbd;
      color: ${palette('text')};
      height: ${space(10)}rem;
      padding: 0.4em 1.4em 0.4em 0.6em;
      text-transform: unset;

      ${props =>
        isInteractive(props) &&
        css`
          &:hover {
            background-color: unset;
            color: unset;
          }

          &:focus {
            background-color: unset;
            color: unset;

            border: 1px solid ${palette('primary')};
            outline: unset;
            box-shadow: ${palette('primary')} 0px 0px 0px 1px !important;
          }
        `};
    `
  }
};
