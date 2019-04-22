import { palette, theme } from 'styled-tools';
import use from 'reakit/use';
import Input from 'reakit/Input';

import styled, { css } from '../styled';
import Spinner from '../Spinner';
import { LocalTextareaProps } from './Textarea';

export const LoadingSpinner = styled(Spinner)`
  position: absolute;
  top: 12px;
  right: 14px;
  z-index: 1;
`;

export const sizeProperties: any = {
  small: css`
    font-size: 0.8rem;

    & + ${LoadingSpinner} {
      top: 10px;
    }

    & {
      ${theme('fannypack.Textarea.sizes.small')};
    }
  `,
  medium: css`
    font-size: 1.25rem;

    & + ${LoadingSpinner} {
      top: 15px;
      right: 10px;
    }

    & {
      ${theme('fannypack.Textarea.sizes.medium')};
    }
  `,
  large: css`
    font-size: 1.5rem;

    & + ${LoadingSpinner} {
      top: 16px;
      right: 12px;
    }

    & {
      ${theme('fannypack.Textarea.sizes.large')};
    }
  `
};

export const stateProperties = css`
  border-color: ${(props: any) => palette(`${props.state}300`)(props)};
  box-shadow: ${(props: any) => palette(`${props.state}300`)(props)} 0px 0px 0px 1px !important;
`;

export const Textarea = styled(use(Input, 'textarea'))<LocalTextareaProps & { styledSize: LocalTextareaProps['size'] }>`
  border: 1px solid #bdbdbd;
  box-shadow: inset 0px 1px 2px #e5e5e5;
  border-radius: 0.2em;
  width: 100%;
  padding: 0.4em 0.6em;

  &[disabled] {
    background-color: ${palette('white700')};
    box-shadow: unset;
    color: ${palette('gray400')};

    & {
      ${theme('fannypack.Textarea.disabled')};
    }
  }

  &:focus {
    outline: unset;
    z-index: 2;
    border-color: ${palette('primary')};
    box-shadow: ${palette('primary')} 0px 0px 0px 1px !important;

    & {
      ${theme('fannypack.Textarea.focus')};
    }
  }

  &::placeholder {
    opacity: 0.6;

    & {
      ${theme('fannypack.Textarea.placeholder')};
    }
  }

  & {
    ${props => props.styledSize && sizeProperties[props.styledSize]};
  }
  & {
    ${props => props.state && stateProperties};
  }

  ${theme('fannypack.Textarea.base')};
`;

export default Textarea;

