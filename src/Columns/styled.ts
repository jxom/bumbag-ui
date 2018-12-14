import { theme } from 'styled-tools';

import { css, styled } from '../styled';
import { Box } from '../primitives';
import { ColumnsProps } from './Columns';

const getWrapProperties = (props: any) => {
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

export default styled(Box)<ColumnsProps>`
  display: flex;

  ${props =>
    !props.isGapless &&
    css`
      margin: 0 -${theme('fannypack.layout.gapFactor')}rem;
    `};

  ${getWrapProperties};

  & {
    ${theme('fannypack.Columns.base')};
  }
`;
