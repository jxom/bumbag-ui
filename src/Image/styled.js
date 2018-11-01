// @flow
import styled, { css } from 'reakit/styled';
import { theme } from 'styled-tools';
import Image from 'reakit/Image';

const fitProperties = props => {
  if (!props.fit) return;
  if (props.fit === 'contain') {
    return css`
      object-fit: contain;
      ${props =>
        props.fitPosition
          ? css`
              object-position: ${props.fitPosition};
            `
          : ''} /**/

      ${theme('fannypack.Image.fit.base')};
      ${theme('fannypack.Image.fit.contain')};
    `;
  }
  if (props.fit === 'cover') {
    return css`
      object-fit: cover;
      ${props =>
        props.fitPosition
          ? css`
              object-position: ${props.fitPosition};
            `
          : ''} /**/

      ${theme('fannypack.Image.fit.base')};
      ${theme('fannypack.Image.fit.cover')};
    `;
  }
};
const fixedProperties = props => {
  if (!props.isFixed) return;
  return css`
    max-width: unset;

    ${theme('fannypack.Image.fixed')};
  `;
};

export default styled(Image)`
  max-width: 100%;

  & {
    ${fitProperties};
  }
  & {
    ${fixedProperties};
  }

  ${theme('fannypack.Image.base')};
`;
