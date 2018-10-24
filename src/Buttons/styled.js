import { css } from 'reakit/styled';
import styled from 'reakit/styled';
import Box from 'reakit/Box';
import { theme } from 'styled-tools';

const groupedProperties = css`
  & > *:not(:first-child) {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-left-width: 0px;
  }
  & > *:not(:last-child) {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  }
  & {
    ${theme('Buttons.grouped')};
  }
`;

export default styled(Box)`
  & > *:not(:first-child) {
    margin-left: ${props => (props.isGrouped ? '' : '0.5rem')};
  }
  & {
    ${theme('Buttons.base')};
  }
  ${props => props.isGrouped && groupedProperties};
`;
