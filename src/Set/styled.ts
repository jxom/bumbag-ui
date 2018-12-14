import { theme } from 'styled-tools';

import styled, { css } from '../styled';
import { InlineFlex } from '../primitives';
import { LocalSetProps } from './Set';

export default styled(InlineFlex)<LocalSetProps>`
  flex-wrap: wrap;

  ${props =>
    props.isVertical
      ? css`
          align-items: flex-start;
          display: inline-flex;
          flex-direction: column;
          margin-top: -${props => theme(`fannypack.layout.spacing.${props.spacing}`)(props)}rem;
        `
      : css`
          align-items: center;
          justify-content: flex-start;
          margin-left: -${props => theme(`fannypack.layout.spacing.${props.spacing}`)(props)}rem;
          margin-top: -${props => theme(`fannypack.layout.spacing.${props.spacing}`)(props)}rem;
        `};

  & > * {
    ${props =>
      props.isVertical
        ? css`
            margin-top: ${props => theme(`fannypack.layout.spacing.${props.spacing}`)(props)}rem;
          `
        : css`
            margin-left: ${props => theme(`fannypack.layout.spacing.${props.spacing}`)(props)}rem;
            margin-top: ${props => theme(`fannypack.layout.spacing.${props.spacing}`)(props)}rem;
          `};

    ${theme('fannypack.Set.child')};
  }

  & {
    ${theme('fannypack.Set.base')};
  }
`;
