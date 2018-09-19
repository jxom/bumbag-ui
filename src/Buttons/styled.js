import { css } from 'reakit';
import styled from 'reakit/styled';
import Box from 'reakit/Box';

const groupedAttributes = css`
  & > *:not(:first-child) {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-left-width: 0px;
  }
  & > *:not(:last-child) {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

export const Buttons = styled(Box)`
  & > *:not(:first-child) {
    margin-left: ${props => (props.isGrouped ? '' : '0.5rem')};
  }
  ${props => props.isGrouped && groupedAttributes};
`;
