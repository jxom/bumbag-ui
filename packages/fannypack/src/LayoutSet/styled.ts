import { theme } from 'styled-tools';

import styled, { css } from '../styled';
import Set from '../Set';
import { LayoutSetProps } from './LayoutSet';

export const LayoutSet = styled(Set)<LayoutSetProps>`
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
            ${theme('fannypack.LayoutSet.horizontal')};
          }
        `
      : css`
          display: block;

          & {
            ${theme('fannypack.LayoutSet.vertical')};
          }
        `};

  & {
    ${theme('fannypack.LayoutSet.base')};
  }
`;

export default LayoutSet;
