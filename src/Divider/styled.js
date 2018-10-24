import Divider from 'reakit/Divider';
import styled, { css } from 'reakit/styled';
import { theme } from 'styled-tools';

const contentProperties = css`
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    background: white;
    color: #c3c3c3;
    content: '${props => props.content}';
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: bold;
    padding: 0.2rem 0.5rem;

    & {
      ${theme('Divider.content')}
    }
  }
`;
const verticalProperties = css`
  height: auto;

  & {
    ${theme('Divider.vertical')};
  }
`;

export default styled(Divider)`
  opacity: 1;
  border-color: #e7e9ed;

  & {
    ${props => props.content && contentProperties} /**/
    ${props => props.vertical && verticalProperties};
  }

  & {
    ${theme('Divider.base')};
  }
`;
