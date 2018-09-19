import { css } from 'styled-components';
import styled from 'reakit/styled';
import Box from 'reakit/Box';
import Button from 'reakit/Button';
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
  border: 0;
  cursor: not-allowed;
  opacity: 0.7;
  outline: unset;
  pointer-events: unset;
`;
const interactiveAttributes = css`
  &:hover {
    background-color: ${props => darken(0.05, props.theme.colors[props.state])};
    box-shadow: 1px 5px 7px -5px rgb(117, 117, 117) !important;
    transform: translateY(-1px);
  }
  &:hover:active {
    background-color: ${props => darken(0.1, props.theme.colors[props.state])};
    box-shadow: 1px 2px 7px -5px rgb(117, 117, 117) !important;
    transform: translateY(1px);
  }
`;
const loadingAttributes = css`
  cursor: not-allowed;

  &:focus {
    outline: unset !important;
  }
`;

export const BaseButton = css`
  align-items: center;
  border-radius: 4px;
  box-shadow: 1px 4px 7px -5px rgb(117, 117, 117);
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  justify-content: center;

  &[disabled] {
    ${disabledAttributes}
  }

  ${props => sizes[props.size]} /* Extend size styles */

  ${props =>
    !props.isLoading && !props.disabled && !props.isLink ? interactiveAttributes : ''} /* Add interactive attributes */
  ${props => props.isLoading && loadingAttributes}
`;

export const DefaultButton = styled(Button)`
  background-color: ${props => props.theme.colors[props.state]};
  border: 1px solid ${props => darken(0.2, props.theme.colors[props.state])};
  color: ${props => props.theme.colorsInverted[props.state]};
`;

export const OutlinedButton = styled(Button)`
  background-color: unset;
  border: 1px solid ${props => props.theme.colors[props.state]};
  color: ${props => props.theme.colors[props.state]};

  &:hover {
    color: ${props => props.theme.colorsInverted[props.state]};
  }
`;

export const LinkButton = styled(Button)`
  border: 0;
  background: unset;
  box-shadow: unset !important;
  color: ${props => (props.state === 'default' ? props.theme.colors.text : props.theme.colors[props.state])};
  text-decoration: underline;

  &:hover {
    color: ${props =>
      props.state === 'default' ? darken(0.5, props.theme.colors.text) : darken(0.5, props.theme.colors[props.state])};
  }
`;

export const LoaderWrapper = styled(Box)`
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
