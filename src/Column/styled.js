import { css } from 'styled-components';
import styled from 'reakit/styled';
import Box from 'reakit/Box';
import { theme } from 'styled-tools';

const marginAutoOffsets = {
  left: css`
    margin-left: auto;
  `,
  both: css`
    margin-left: auto;
    margin-right: auto;
  `,
  right: css`
    margin-right: auto;
  `
};

const getSpreadOffsetAttributes = spreadOffset => {
  if (typeof spreadOffset === 'number') {
    return css`
      margin-left: ${getWidth(spreadOffset)};
    `;
  }
  return marginAutoOffsets[spreadOffset];
};

const getWidth = spread => `${spread / 12 * 100}%`;

const Column = styled(Box)`
  flex: 1;
  max-width: 100%;
  padding: ${theme('layout.gapFactor')}rem;

  ${props =>
    props.spread &&
    css`
      & {
        flex: none;
        width: ${getWidth(props.spread)};
      }
    `};

  & {
    ${props => props.spreadOffset && getSpreadOffsetAttributes(props.spreadOffset)};
  }
`;

export default Column;
