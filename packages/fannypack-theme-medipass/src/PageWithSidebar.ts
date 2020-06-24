import { css, palette } from 'fannypack';

export default {
  Sidebar: {
    css: {
      root: props => css`
        color: white;
        background-color: ${palette('primary800')(props)};
      `
    }
  }
}
