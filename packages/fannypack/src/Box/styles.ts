import { theme, cssClass } from '../styled';

export const style = styleProps => cssClass`
  && {
    ${styleProps.style};
  }
`;

export const Box = styleProps => cssClass`
  margin: unset;
  padding: unset;
  border: unset;
  background: unset;
  font: unset;
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;

  &:focus:not(:focus-visible) {
    outline: none;
  }

  & {
    ${theme('Box.base')(styleProps)};
  }
`;
