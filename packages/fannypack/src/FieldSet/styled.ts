import { theme } from 'styled-tools';

import styled, { css } from '../styled';
import Set from '../Set';
import { FieldSetProps } from './FieldSet';

export const FieldSet = styled(Set)<FieldSetProps>`
  ${props =>
    props.isHorizontal
      ? css`
          display: flex;

          & > * {
            flex: 1;
          }

          @media screen and (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
            display: block;
            margin-top: 0rem;
          }

          & {
            ${theme('fannypack.FieldSet.horizontal')};
          }
        `
      : css`
          display: block;

          & {
            ${theme('fannypack.FieldSet.vertical')};
          }
        `};

  & {
    ${theme('fannypack.FieldSet.base')};
  }
`;

export default FieldSet;
