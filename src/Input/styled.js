// @flow
import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import Input from 'reakit/Input';

import { InlineFlex } from '../primitives';
import _Icon from '../Icon';
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
    & + ${LoadingSpinner} {
      width: 10px;
      height: 10px;
      top: 10px;
    }

    & {
      ${theme('fannypack.Input.sizes.small')};
    }
  `,
  medium: css`
    & + ${LoadingSpinner} {
      width: 20px;
      height: 20px;
      top: 15px;
      right: 10px;
    }

    & {
      ${theme('fannypack.Input.sizes.medium')};
    }
  `,
  large: css`
    & + ${LoadingSpinner} {
      width: 25px;
      height: 25px;
      top: 16px;
      right: 12px;
    }

    & {
      ${theme('fannypack.Input.sizes.large')};
    }
  `
};

const wrapperSizeProperties = {
  small: css`
    font-size: 0.8rem;

    & {
      ${theme('fannypack.Input.Wrapper.sizes.small')};
    }
  `,
  medium: css`
    font-size: 1.25rem;

    & {
      ${theme('fannypack.Input.Wrapper.sizes.medium')};
    }
  `,
  large: css`
    font-size: 1.5rem;

    & {
      ${theme('fannypack.Input.Wrapper.sizes.large')};
    }
  `
};

const stateProperties = css`
  border-color: ${props => palette(`${props.state}Lighter`)(props)};
  box-shadow: ${props => palette(`${props.state}Lighter`)(props)} 0px 0px 0px 1px !important;
`;

export const Icon = styled(_Icon)`
  fill: ${palette('textLightest')};
  height: 2.5em;
  margin: 0 0.75em;
  top: 0;

  ${theme('fannypack.Input.Icon.base')};
`;

export const InputWrapper = styled(InlineFlex)`
  align-items: center;
  position: relative;
  width: ${props => (props.isFullWidth ? '100%' : undefined)};

  & {
    ${props => props.size && wrapperSizeProperties[props.size]};
  }

  ${theme('fannypack.Input.Wrapper.base')};
`;

export default styled(Input)`
  border: 1px solid #bdbdbd;
  box-shadow: inset 0px 1px 2px #e5e5e5;
  border-radius: 0.2em;
  height: 2.5em;
  width: 100%;
  padding: 0.4em 0.6em;

  &[disabled] {
    background-color: ${palette('whiteDarker')};
    box-shadow: unset;
    color: ${palette('grayLight')};

    & {
      ${theme('fannypack.Input.disabled')};
    }
  }

  &:focus {
    outline: unset;
    z-index: 2;
    border-color: ${props => palette('primaryLighter')(props)};
    box-shadow: ${props => palette('primaryLighter')(props)} 0px 0px 0px 1px !important;

    & {
      ${theme('fannypack.Input.focus')};
    }
  }

  &::placeholder {
    opacity: 0.6;

    & {
      ${theme('fannypack.Input.placeholder')};
    }
  }

  & {
    ${props =>
      props.after &&
      css`
        padding-right: 2.3em;
      `};
  }
  & {
    ${props =>
      props.before &&
      css`
        padding-left: 2.3em;
      `};
  }
  & {
    ${props =>
      props.isFullWidth &&
      css`
        width: 100%;
      `};
  }
  & {
    ${props => props.size && sizeProperties[props.size]};
  }
  & {
    ${props => props.state && stateProperties};
  }

  ${theme('fannypack.Input.base')};
`;
