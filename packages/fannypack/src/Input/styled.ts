import * as React from 'react';
import { palette, theme } from 'styled-tools';
import Input from 'reakit/Input';

import styled, { css, selector } from '../styled';
import { Box } from '../primitives';
import _Icon, { IconProps } from '../Icon/Icon';
// @ts-ignore
import Spinner from '../Spinner';
import { InputProps } from './Input';

export const LoadingSpinner = styled(Spinner)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
`;

const sizeProperties: { [key: string]: any } = {
  small: css`
    & + ${LoadingSpinner} {
      top: 8px;
    }

    & {
      ${theme('fannypack.Input.sizes.small')};
    }
  `,
  medium: css`
    & + ${LoadingSpinner} {
      top: 10px;
      right: 10px;
    }

    & {
      ${theme('fannypack.Input.sizes.medium')};
    }
  `,
  large: css`
    & + ${LoadingSpinner} {
      top: 10px;
      right: 10px;
    }

    & {
      ${theme('fannypack.Input.sizes.large')};
    }
  `
};

const wrapperSizeProperties: { [key: string]: any } = {
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
  border-color: ${(props: any) => palette(`${props.state}`)(props)};
  box-shadow: ${(props: any) => palette(`${props.state}`)(props)} 0px 0px 0px 1px !important;
`;

// @ts-ignore
export const Icon: React.FunctionComponent<IconProps> = styled(_Icon)<IconProps>`
  fill: ${palette('text100')};
  height: 2.5em;
  margin: 0 0.75em;
  top: 0;

  ${theme('fannypack.Input.Icon.base')};
`;

export const InputWrapper = styled(Box)<{ styledSize?: string }>`
  align-items: center;
  position: relative;
  width: 100%;

  & {
    ${theme('fannypack.Input.Wrapper.base')};
  }

  & {
    ${(props: { styledSize?: string }) => props.styledSize && wrapperSizeProperties[props.styledSize]};
  }
`;

export default styled(Input)<InputProps & { styledSize?: string }>`
  border: 1px solid #bdbdbd;
  box-shadow: inset 0px 1px 2px #e5e5e5;
  border-radius: 0.2em;
  height: 2.5em;
  width: 100%;
  padding: 0.4em 0.6em;

  &[disabled] {
    background-color: ${palette('white700')};
    box-shadow: unset;
    color: ${palette('gray400')};

    & {
      ${theme('fannypack.Input.disabled')};
    }
  }

  &:focus {
    outline: unset;
    z-index: 2;
    border-color: ${(props: any) => palette('primary')(props)};
    box-shadow: ${(props: any) => palette('primary')(props)} 0px 0px 0px 1px !important;

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
    ${(props: any) =>
      props.after &&
      css`
        padding-right: 2.3em;
      `};
  }
  & {
    ${(props: any) =>
      props.before &&
      css`
        padding-left: 2.3em;
      `};
  }

  & {
    ${theme('fannypack.Input.base')};
  }

  & {
    ${(props: any) => props.styledSize && sizeProperties[props.styledSize]};
  }
  & {
    ${(props: any) => props.state && stateProperties};
  }
`;
