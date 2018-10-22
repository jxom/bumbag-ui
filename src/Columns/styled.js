import { css } from 'reakit/styled';
import styled from 'reakit/styled';
import Box from 'reakit/Box';
import { theme } from 'styled-tools';

const getWrapAttributes = props => {
  const { isOneLine, minBreakpoint } = props;
  if (isOneLine) {
    if (minBreakpoint !== 'tablet' && minBreakpoint !== 'mobile') {
      return css`
        @media (max-width: ${theme('layout.tabletBreakpoint')}px) {
          flex-wrap: wrap;
        }
      `;
    }
    if (minBreakpoint !== 'mobile') {
      return css`
        @media (max-width: ${theme('layout.mobileBreakpoint')}px) {
          flex-wrap: wrap;
        }
      `;
    }
  } else {
    return css`
      flex-wrap: wrap;
    `;
  }
};

export default styled(Box)`
  display: flex;

  ${props =>
    !props.isGapless &&
    css`
      margin: 0 -${theme('layout.gapFactor')}rem;
    `} /**/

  ${getWrapAttributes};

  & {
    ${theme('Columns.base')};
  }
`;
