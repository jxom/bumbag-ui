import * as React from 'react';
import { palette, theme } from 'styled-tools';
import Input from '@jmoxey/reakit/Input';

import styled, { css } from '../styled';
import { InlineFlex } from '../primitives';
import _Icon, { IconProps } from '../Icon/Icon';
// @ts-ignore
import Spinner from '../Spinner';
import { InputProps } from './Input';

export const LoadingSpinner = styled(Spinner)`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 12px;
  right: 10px;
  z-index: 1;
`;

const sizeProperties: { [key: string]: any } = {
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
  border-color: ${(props: any) => palette(`${props.state}Lighter`)(props)};
  box-shadow: ${(props: any) => palette(`${props.state}Lighter`)(props)} 0px 0px 0px 1px !important;
`;

// @ts-ignore
export const Icon: React.FunctionComponent<IconProps> = styled(_Icon)<IconProps>`
  fill: ${palette('textLightest')};
  height: 2.5em;
  margin: 0 0.75em;
  top: 0;

  ${theme('fannypack.Input.Icon.base')};
`;

export const InputWrapper = styled(InlineFlex)<{ isFullWidth?: boolean; styledSize?: string }>`
  align-items: center;
  position: relative;
  width: ${(props: { isFullWidth?: boolean }) => (props.isFullWidth ? '100%' : undefined)};

  & {
    ${(props: { styledSize?: string }) => props.styledSize && wrapperSizeProperties[props.styledSize]};
  }

  ${theme('fannypack.Input.Wrapper.base')};
`;

export default styled(Input)<InputProps & { styledSize?: string }>`
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
    border-color: ${(props: any) => palette('primaryLighter')(props)};
    box-shadow: ${(props: any) => palette('primaryLighter')(props)} 0px 0px 0px 1px !important;

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
    ${(props: any) =>
      props.isFullWidth &&
      css`
        width: 100%;
      `};
  }
  & {
    ${(props: any) => props.styledSize && sizeProperties[props.styledSize]};
  }
  & {
    ${(props: any) => props.state && stateProperties};
  }

  ${theme('fannypack.Input.base')};
`;
