import { css } from '../styled';

export function getHiddenScrollbarStyles() {
  return css`
    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    & {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  `;
}
