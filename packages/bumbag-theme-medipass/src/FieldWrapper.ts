import { css } from 'bumbag';

export default {
  TooltipPopover: {
    styles: {
      base: css`
        background-color: rgb(255, 251, 217);
        line-height: 1.2;
      `
    }
  },
  TooltipTrigger: {
    styles: {
      base: css`
        min-height: unset;
        height: unset;
        padding: 0.1em 0.2em;
        position: absolute;
        top: -0.75em;
        height: 22px;
      `
    }
  }
};
