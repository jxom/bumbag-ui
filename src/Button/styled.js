// @flow
import { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { darken, tint } from 'polished';
import Button from 'reakit/Button';
import styled from 'reakit/styled';

const sizeProperties = {
  small: css`
    & {
      font-size: 0.8em;
      height: 2em;
      padding: 0 0.5rem;
    }
    & {
      ${theme('fannypack.Button.sizes.small')};
    }
  `,
  medium: css`
    & {
      height: 3em;
      padding: 0 1.25rem;
    }
    & {
      ${theme('fannypack.Button.sizes.medium')};
    }
  `,
  large: css`
    & {
      font-size: 1.25rem;
      height: 3em;
      padding: 0 1.5rem;
    }
    & {
      ${theme('fannypack.Button.sizes.large')};
    }
  `
};

const linkProperties = css`
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
    ${theme('fannypack.Button.link')};
  }
`;
const outlinedProperties = css`
  & {
    background-color: unset;
    border: 1px solid ${palette()};
    color: ${palette()};

    &:hover {
      color: ${props => palette(`${props.palette}Inverted`)(props)};
    }
  }
  & {
    ${theme('fannypack.Button.outlined')};
  }
`;

const disabledProperties = css`
  & {
    cursor: not-allowed;
    opacity: 0.7;
    outline: unset;
    pointer-events: unset;
  }
  & {
    ${theme('fannypack.Button.disabled')};
  }
`;

const interactiveProperties = css`
  &:hover {
    background-color: ${props => darken(0.05, palette()(props))};
  }
  &:hover:active {
    background-color: ${props => darken(0.1, palette()(props))};
  }
`;
const loadingProperties = css`
  & {
    cursor: not-allowed;

    &:focus {
      outline: unset !important;
    }
  }
  & {
    ${theme('fannypack.Button.loading')};
  }
`;

export default styled(Button)`
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

  &:focus {
    outline: unset;
    z-index: 2;
    box-shadow: ${props =>
      tint(
        0.3,
        palette(props.palette === 'default' ? 'primary' : props.palette)(props)
      )} 0px 0px 0px 3px, rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.3) 0px -1px 1px 0px inset !important;
  }

  &[disabled] {
    ${disabledProperties}
  }

  {/* Add size styles */}
  ${props => sizeProperties[props.size]}

  {/* Add type styles */}
  ${props => props.type === 'outlined' && outlinedProperties}
  ${props => props.type === 'link' && linkProperties}

  ${props => props.isLoading && loadingProperties} {/* Add loading styles */}
  ${props =>
    !props.isLoading && !props.disabled && props.type !== 'link'
      ? interactiveProperties
      : ''} /* Add interactive styles */

  & {
    ${theme('fannypack.Button.base')}
  }
`;
