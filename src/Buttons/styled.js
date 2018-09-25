import { css } from 'styled-components';
import styled from 'reakit/styled';
import Box from 'reakit/Box';
import { theme } from 'styled-tools';

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
  & {
    ${theme('buttons.grouped')};
  }
`;

export default styled(Box)`
  & > *:not(:first-child) {
    margin-left: ${props => (props.isGrouped ? '' : '0.5rem')};
  }
  & {
    ${theme('buttons.base')};
  }
  ${props => props.isGrouped && groupedAttributes};
`;
