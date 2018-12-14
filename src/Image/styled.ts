import { theme } from 'styled-tools';
// @ts-ignore
import Image from 'reakit/Image';

import styled, { css } from '../styled';
import { ImageProps } from './Image';

const fitProperties = (props: ImageProps) => {
  if (!props.fit) return;
  if (props.fit === 'contain') {
    return css`
      object-fit: contain;
      ${(props: ImageProps) =>
        props.fitPosition
          ? css`
              object-position: ${props.fitPosition};
            `
          : ''};

      ${theme('fannypack.Image.fit.base')};
      ${theme('fannypack.Image.fit.contain')};
    `;
  }
  if (props.fit === 'cover') {
    return css`
      object-fit: cover;
      ${(props: ImageProps) =>
        props.fitPosition
          ? css`
              object-position: ${props.fitPosition};
            `
          : ''};

      ${theme('fannypack.Image.fit.base')};
      ${theme('fannypack.Image.fit.cover')};
    `;
  }
  return null;
};
const fixedProperties = (props: ImageProps) => {
  if (!props.isFixed) return;
  return css`
    max-width: unset;

    ${theme('fannypack.Image.fixed')};
  `;
};

export default styled(Image)<ImageProps>`
  max-width: 100%;

  & {
    ${fitProperties};
  }
  & {
    ${fixedProperties};
  }

  ${theme('fannypack.Image.base')};
`;
