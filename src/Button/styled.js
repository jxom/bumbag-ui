import { css } from 'styled-components';
import styled from 'reakit/styled';
import Base from 'reakit/Base';
import Button from 'reakit/Button';
import { darken } from 'polished';

const sizes = {
  small: {
    fontSize: '0.8em',
    height: '2em'
  },
  medium: {
    height: '3em',
    padding: '1.25rem'
  },
  large: {
    fontSize: '1.25rem',
    height: '3em',
    padding: '1.5rem'
  }
};

const interactiveAttributes = css`
  cursor: pointer;

  &:hover {
    background-color: ${props => darken(0.05, props.theme.colors[props.color])};
    box-shadow: 1px 5px 7px -5px rgb(117, 117, 117) !important;
    transform: translateY(-1px);
  }
  &:hover:active {
    background-color: ${props => darken(0.1, props.theme.colors[props.color])};
    box-shadow: 1px 2px 7px -5px rgb(117, 117, 117) !important;
    transform: translateY(1px);
  }
`;

export const BaseButton = styled(Button)`
  background-color: ${props => props.theme.colors[props.color]};
  border: 1px solid ${props => darken(0.2, props.theme.colors[props.color])};
  box-shadow: 1px 4px 7px -5px rgb(117, 117, 117) !important;
  color: ${props => props.theme.colorsInverted[props.color]};
  cursor: unset;

  &:focus {
    outline: ${props => (props.isLoading ? 'unset' : null)}
  }

  ${props => sizes[props.size]} /* Extend size styles */

  ${props => (!props.isLoading ? interactiveAttributes : '')} /* Add interactive attributes */
`;

export const OutlinedButton = styled(BaseButton)`
  background-color: unset;
  border: 1px solid ${props => props.theme.colors[props.color]};
  color: ${props => props.theme.colors[props.color]};

  &:hover {
    color: ${props => props.theme.colorsInverted[props.color]};
  }
`;

export const LinkButton = styled(Button)`
  border: 0;
  background: unset;
  color: ${props => (props.color === 'default' ? props.theme.colors.text : props.theme.colors[props.color])};
  text-decoration: underline;

  &:focus {
    outline: ${props => (props.isLoading ? 'unset' : null)};
  }

  ${props => sizes[props.size]};

  &:focus {
    box-shadow: unset;
  }
  &:hover {
    box-shadow: unset;
    color: ${props =>
      props.color === 'default' ? darken(0.5, props.theme.colors.text) : darken(0.5, props.theme.colors[props.color])};
  }
  &:hover:active {
    box-shadow: unset;
  }
`;

export const LoaderWrapper = styled(Base)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    opacity: 0;
  }
`;
