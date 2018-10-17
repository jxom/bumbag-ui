// @flow
import styled, { css } from 'reakit/styled';
import { theme } from 'styled-tools';
import Image from 'reakit/Image';

const fitAttributes = props => {
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

      ${theme('image.fit.base')};
      ${theme('image.fit.contain')};
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

      ${theme('image.fit.base')};
      ${theme('image.fit.cover')};
    `;
  }
};
const fixedAttributes = props => {
  if (!props.isFixed) return;
  return css`
    max-width: unset;

    ${theme('image.fixed')};
  `;
};

export default styled(Image)`
  max-width: 100%;

  & {
    ${fitAttributes};
  }
  & {
    ${fixedAttributes};
  }

  ${theme('image.base')};
`;
