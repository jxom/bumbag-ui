import { theme } from 'styled-tools';

import styled, { css } from '../styled';
import { Box } from '../primitives';
import { ColumnsProps } from './Columns';

export const getWrapProperties = (props: any) => {
  const { isOneLine, minBreakpoint } = props;
  if (isOneLine) {
    if (minBreakpoint !== 'tablet' && minBreakpoint !== 'mobile') {
      return css`
        @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
          flex-wrap: wrap;
        }
      `;
    }
    if (minBreakpoint !== 'mobile') {
      return css`
        @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
          flex-wrap: wrap;
        }
      `;
    }
    return null;
  } else {
    return css`
      flex-wrap: wrap;
    `;
  }
};

export const Columns = styled(Box)<ColumnsProps>`
  display: flex;

  ${props =>
    !props.isGapless &&
    css`
      margin-left: -${theme('fannypack.layout.gapFactor')}rem;
      margin-right: -${theme('fannypack.layout.gapFactor')}rem;
      margin-top: -${theme('fannypack.layout.gapFactor')}rem;

      &:last-child {
        margin-bottom: -${theme('fannypack.layout.gapFactor')}rem;
      }
    `};

  ${getWrapProperties};

  & {
    ${theme('fannypack.Columns.base')};
  }
`;

export default Columns;
