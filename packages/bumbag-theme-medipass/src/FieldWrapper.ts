import { css, palette } from 'bumbag';

export default {
  TooltipPopover: {
    styles: {
      base: css`
        background-color: rgb(255, 251, 217);
        line-height: 1.2;
      `,
    },
  },
  TooltipTrigger: {
    styles: {
      base: (props) => css`
        border: none;
        background: unset;
        min-height: unset;
        height: unset;
        padding: 0.1em 0.2em;
        position: absolute;
        top: -0.75em;
        height: 22px;

        &:hover {
          background: unset;
          color: ${palette('text')(props)};
        }

        &&&:focus {
          background: unset;
          outline: none;
          border: none;
          color: ${palette('text')(props)};
        }
      `,
    },
  },
};
