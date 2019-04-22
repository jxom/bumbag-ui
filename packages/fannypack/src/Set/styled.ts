import { theme } from 'styled-tools';

import styled, { css, space } from '../styled';
import { Flex } from '../primitives';
import { LocalSetProps } from './Set';

export const Set = styled(Flex)<LocalSetProps>`
  ${props =>
    props.isVertical
      ? css`
          flex-direction: column;

          ${(props: any) =>
            !props.isFilled &&
            css`
              align-items: flex-start;
            `};
        `
      : css`
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          margin-left: -${(props: any) => space(props.spacing)(props)}rem;
          margin-top: -${(props: any) => space(props.spacing)(props)}rem;
        `};

  & > * {
    ${props =>
      props.isVertical
        ? css`
            &:not(:last-child) {
              margin-bottom: ${(props: any) => space(props.spacing)(props)}rem;
            }
          `
        : css`
            margin-left: ${(props: any) => space(props.spacing)(props)}rem;
            margin-top: ${(props: any) => space(props.spacing)(props)}rem;
          `};

    ${theme('fannypack.Set.child')};
  }

  & {
    ${theme('fannypack.Set.base')};
  }
`;

export default Set;
