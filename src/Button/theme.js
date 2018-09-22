import { css } from 'styled-components';
import { palette } from 'styled-tools';
import { darken } from 'polished';

const getSizeAttributes = (sizesOverides = {}) => ({
  small: css`
    & {
      font-size: 0.8em;
      height: 2em;
      padding: 0 0.5rem;
    }
    & {
      ${sizesOverides.small};
    }
  `,
  medium: css`
    & {
      height: 3em;
      padding: 0 1.25rem;
    }
    & {
      ${sizesOverides.medium};
    }
  `,
  large: css`
    & {
      font-size: 1.25rem;
      height: 3em;
      padding: 0 1.5rem;
    }
    & {
      ${sizesOverides.large};
    }
  `
});

const getLinkAttributes = linkOverrides => css`
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
  & {
    ${linkOverrides};
  }
`;
const getOutlinedAttributes = outlinedOverrides => css`
  & {
    background-color: unset;
    border: 1px solid ${palette()};
    color: ${palette()};

    &:hover {
      color: ${props => palette(`${props.palette}Inverted`)(props)};
    }
  }
  & {
    ${outlinedOverrides};
  }
`;

const getDisabledAttributes = disabledOverrides => css`
  & {
    cursor: not-allowed;
    opacity: 0.7;
    outline: unset;
    pointer-events: unset;
  }
  & {
    ${disabledOverrides};
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
const getLoadingAttributes = loadingOverrides => css`
  & {
    cursor: not-allowed;

    &:focus {
      outline: unset !important;
    }
  }
  & {
    ${loadingOverrides};
  }
`;

export default ({
  base: baseOverrides,
  disabled: disabledOverrides,
  link: linkOverrides,
  loading: loadingOverrides,
  outlined: outlinedOverrides,
  sizes: sizesOverides
} = {}) => css`
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

  & {
    ${baseOverrides}
  }

  &[disabled] {
    ${getDisabledAttributes(disabledOverrides)}
  }

  {/* Add size styles */}
  ${props => getSizeAttributes(sizesOverides)[props.size]}

  {/* Add type styles */}
  ${props => props.type === 'outlined' && getOutlinedAttributes(outlinedOverrides)}
  ${props => props.type === 'link' && getLinkAttributes(linkOverrides)}

  ${props => props.isLoading && getLoadingAttributes(loadingOverrides)} {/* Add loading styles */}
  ${props =>
    !props.isLoading && !props.disabled && props.type !== 'link'
      ? interactiveAttributes
      : ''} /* Add interactive styles */
`;
