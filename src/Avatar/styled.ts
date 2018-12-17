import _Avatar from 'reakit/Avatar';
import { palette, theme } from 'styled-tools';

import { styled, css } from '../styled';
import { Box } from '../primitives';
import { AvatarProps } from './Avatar';

const circleProperties = css`
  & {
    border-radius: 50%;
  }
`;

const fitProperties = (props: any) => {
  if (!props.fit) return null;
  if (props.fit === 'contain') {
    return css`
      object-fit: contain;
      ${(props: any) =>
        props.fitPosition
          ? css`
              object-position: ${props.fitPosition};
            `
          : ''};

      ${theme('fannypack.Avatar.fit.base')};
      ${theme('fannypack.Avatar.fit.contain')};
    `;
  }
  if (props.fit === 'cover') {
    return css`
      object-fit: cover;
      ${(props: any) =>
        props.fitPosition
          ? css`
              object-position: ${props.fitPosition};
            `
          : ''};

      ${theme('fannypack.Avatar.fit.base')};
      ${theme('fannypack.Avatar.fit.cover')};
    `;
  }
  return null;
};

const sizeProperties: any = {
  xsmall: css`
    & {
      font-size: 8px;
      width: 20px;
      height: 20px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.xsmall')};
    }
  `,
  small: css`
    & {
      font-size: 16px;
      width: 40px;
      height: 40px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.small')};
    }
  `,
  medium: css`
    & {
      font-size: 32px;
      width: 80px;
      height: 80px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.medium')};
    }
  `,
  large: css`
    & {
      font-size: 48px;
      width: 100px;
      height: 100px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.large')};
    }
  `
};

export const AvatarCircle = styled(Box)<AvatarProps & { styledSize: any }>`
  align-items: center;
  background-color: ${(props: any) => palette(props.palette || '')(props)};
  color: ${(props: any) => (props.color ? props.color : palette(`${props.palette}Inverted`)(props))};
  display: flex;
  justify-content: center;
  font-size: 24px;
  height: ${(props: any) => (typeof props.styledSize === 'number' ? `${props.styledSize}px` : '60px')};
  width: ${(props: any) => (typeof props.styledSize === 'number' ? `${props.styledSize}px` : '60px')};

  ${(props: any) => props.kind === 'circle' && circleProperties};
  ${(props: any) => (typeof props.styledSize === 'string' ? sizeProperties[props.styledSize] : null)};

  ${theme('fannypack.Avatar.Circle.base')};
`;

const AvatarImage = styled(_Avatar)<AvatarProps & { styledSize: any }>`
  font-size: 24px;
  height: ${(props: any) => (typeof props.styledSize === 'number' ? `${props.styledSize}px` : '60px')};
  width: ${(props: any) => (typeof props.styledSize === 'number' ? `${props.styledSize}px` : '60px')};
  ${(props: any) => props.kind === 'circle' && circleProperties};
  ${(props: any) => (typeof props.styledSize === 'string' ? sizeProperties[props.styledSize] : null)};

  & {
    ${fitProperties};
  }

  ${theme('fannypack.Avatar.Image.base')};
`;

export default AvatarImage;
