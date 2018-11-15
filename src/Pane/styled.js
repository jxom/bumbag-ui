import { palette, theme } from 'styled-tools';
import styled, { css } from '../styled';
import { Box } from '../primitives';

const Pane = styled(Box)`
  display: inline-flex;
  border-radius: 3px;
  flex-wrap: wrap;

  ${props =>
    props.border === 'shadow' &&
    css`
      box-shadow: 0px 2px 4px 0px ${palette('whiteDarkest')}, 0px 0px 0px 1px ${palette('whiteDarkest')};

      & {
        ${theme('fannypack.Pane.border.shadow')};
      }
    `};
  ${props =>
    props.border === true &&
    css`
      border: 1px solid ${palette('whiteDarkest')};

      & {
        ${theme('fannypack.Pane.border.default')};
      }
    `};
  ${props =>
    props.isFullWidth &&
    css`
      width: 100%;
      margin-right: 0px !important;
    `};

  & {
    ${theme('fannypack.Pane.base')};
  }
`;

export default Pane;
