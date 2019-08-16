import { cssClass, palette, theme } from '../styled';

export const Link = styleProps => cssClass`
  color: ${palette('primary')(styleProps)};
  fill: ${palette('primary')(styleProps)};
  cursor: pointer;
  text-decoration: underline;
  text-decoration-skip: ink edges;

  &:hover {
    color: ${palette('primary900')(styleProps)};
    fill: ${palette('primary900')(styleProps)};

    & {
      ${theme('Link.hover')(styleProps)};
    }
  }

  &:focus {
    outline-style: dashed;

    & {
      ${theme('Link.focus')(styleProps)};
    }
  }

  & {
    ${theme('Link.base')(styleProps)};
  }
`;
