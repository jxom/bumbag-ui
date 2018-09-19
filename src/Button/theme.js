import { css } from 'styled-components';
import { palette } from 'styled-tools';
import { darken } from 'polished';

const sizes = {
  small: {
    fontSize: '0.8em',
    height: '2em',
    padding: '0 0.5rem'
  },
  default: {
    height: '2.5em',
    padding: '0 0.8rem'
  },
  medium: {
    height: '3em',
    padding: '0 1.25rem'
  },
  large: {
    fontSize: '1.25rem',
    height: '3em',
    padding: '0 1.5rem'
  }
};

const disabledAttributes = css`
  cursor: not-allowed;
  opacity: 0.7;
  outline: unset;
  pointer-events: unset;
`;
const interactiveAttributes = css`
  &:hover {
    background-color: ${props => darken(0.05, palette()(props))};
  }
  &:hover:active {
    background-color: ${props => darken(0.1, palette()(props))};
  }
`;
const loadingAttributes = css`
  cursor: not-allowed;

  &:focus {
    outline: unset !important;
  }
`;

export default css`
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  justify-content: center;
  text-decoration: none;

  &[disabled] {
    ${disabledAttributes}
  }

  ${props => sizes[props.size]} /* Extend size styles */

  ${props =>
    !props.isLoading && !props.disabled && !props.isLink ? interactiveAttributes : ''} /* Add interactive attributes */
  ${props => props.isLoading && loadingAttributes}
`;
