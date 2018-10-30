// @flow
import styled, { css } from 'reakit/styled';
import { tint } from 'polished';
import { palette, theme } from 'styled-tools';
import Input from 'reakit/Input';

import Spinner from '../Spinner';

export const LoadingSpinner = styled(Spinner)`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 12px;
  right: 10px;
  z-index: 1;
`;

const sizeProperties = {
  small: css`
    font-size: 0.8rem;

    & + ${LoadingSpinner} {
      width: 10px;
      height: 10px;
      top: 10px;
    }

    & {
      ${theme('Input.sizes.small')};
    }
  `,
  medium: css`
    font-size: 1.25rem;

    & + ${LoadingSpinner} {
      width: 20px;
      height: 20px;
      top: 15px;
      right: 10px;
    }

    & {
      ${theme('Input.sizes.medium')};
    }
  `,
  large: css`
    font-size: 1.5rem;

    & + ${LoadingSpinner} {
      width: 25px;
      height: 25px;
      top: 16px;
      right: 12px;
    }

    & {
      ${theme('Input.sizes.large')};
    }
  `
};

const stateProperties = css`
  border-color: ${props => tint(0.3, palette(props.state)(props))}
  box-shadow: ${props => tint(0.3, palette(props.state)(props))} 0px 0px 0px 1px !important;
`;

export default styled(Input)`
  border: 1px solid #bdbdbd;
  box-shadow: inset 0px 1px 2px #e5e5e5;
  border-radius: 0.2em;
  padding: 0.4em 0.6em;

  &[disabled] {
    background-color: ${palette('whiteDarker')};
    box-shadow: unset;
    color: ${palette('grayLight')}

    & {
      ${theme('Input.disabled')}
    }
  }

  &:focus {
    outline: unset;
    z-index: 2;
    border-color: ${props => tint(0.3, palette('primary')(props))}
    box-shadow: ${props => tint(0.3, palette('primary')(props))} 0px 0px 0px 1px !important;

    & {
      ${theme('Input.focus')}
    }
  }

  &::placeholder {
    opacity: 0.6;

    & {
      ${theme('Input.placeholder')}
    }
  }

  & {
    ${props =>
      props.isFullWidth &&
      css`
        width: 100%;
      `}
  }
  & {
    ${props => props.size && sizeProperties[props.size]}
  }
  & {
    ${props => props.state && stateProperties}
  }

  ${theme('Input.base')};
`;
