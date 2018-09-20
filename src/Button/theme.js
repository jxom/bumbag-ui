import { css } from 'reakit';
import { palette } from 'styled-tools';
import { darken } from 'polished';

const sizeAttributes = {
  small: css`
    & {
      font-size: 0.8em;
      height: 2em;
      padding: 0 0.5rem;
    }
  `,
  medium: css`
    & {
      height: 3em;
      padding: 0 1.25rem;
    }
  `,
  large: css`
    & {
      font-size: 1.25rem;
      height: 3em;
      padding: 0 1.5rem;
    }
  `
};
const disabledAttributes = css`
  & {
    cursor: not-allowed;
    opacity: 0.7;
    outline: unset;
    pointer-events: unset;
  }
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
  & {
    cursor: not-allowed;

    &:focus {
      outline: unset !important;
    }
  }
`;
const linkAttributes = css`
  & {
    border: 0;
    background: unset;
    box-shadow: unset !important;
    color: ${props => (props.palette === 'default' ? palette('text')(props) : palette()(props))};
    text-decoration: underline;

    &:hover {
      color: ${props =>
        props.palette === 'default' ? darken(0.5, palette('text')(props)) : darken(0.5, palette()(props))};
    }
  }
`;
const outlinedAttributes = css`
  & {
    background-color: unset;
    border: 1px solid ${palette()};
    color: ${palette()};

    &:hover {
      color: ${props => palette(`${props.palette}Inverted`)(props)};
    }
  }
`;

export default css`
  align-items: center;
  background-color: ${palette()};
  border: 1px solid ${props => darken(0.2, palette()(props))};
  border-radius: 4px;
  color: ${props => palette(`${props.palette}Inverted`)(props)};
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  height: 2.5em;
  justify-content: center;
  padding: 0 0.8rem;
  text-decoration: none;

  &[disabled] {
    ${disabledAttributes}
  }

  {/* Add size styles */}
  ${props => sizeAttributes[props.size]}

  {/* Add type styles */}
  ${props => props.type === 'outlined' && outlinedAttributes}
  ${props => props.type === 'link' && linkAttributes}

  ${props => props.isLoading && loadingAttributes} {/* Add loading styles */}
  ${props =>
    !props.isLoading && !props.disabled && props.type !== 'link'
      ? interactiveAttributes
      : ''} /* Add interactive styles */
`;
