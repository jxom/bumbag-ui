import { palette, theme } from 'styled-tools';
import use from 'reakit/use';
import Input from 'reakit/Input';

import styled, { css } from '../styled';
import Spinner from '../Spinner';
import { LocalTextareaProps } from './Textarea';

export const LoadingSpinner = styled(Spinner)`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 12px;
  right: 10px;
  z-index: 1;
`;

const sizeProperties: any = {
  small: css`
    font-size: 0.8rem;

    & + ${LoadingSpinner} {
      width: 10px;
      height: 10px;
      top: 10px;
    }

    & {
      ${theme('fannypack.Textarea.sizes.small')};
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
      ${theme('fannypack.Textarea.sizes.medium')};
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
      ${theme('fannypack.Textarea.sizes.large')};
    }
  `
};

const stateProperties = css`
  border-color: ${(props: any) => palette(`${props.state}Lighter`)(props)};
  box-shadow: ${(props: any) => palette(`${props.state}Lighter`)(props)} 0px 0px 0px 1px !important;
`;

export default styled(use(Input, 'textarea'))<LocalTextareaProps & { styledSize: LocalTextareaProps['size'] }>`
  border: 1px solid #bdbdbd;
  box-shadow: inset 0px 1px 2px #e5e5e5;
  border-radius: 0.2em;
  width: 100%;
  padding: 0.4em 0.6em;

  &[disabled] {
    background-color: ${palette('whiteDarker')};
    box-shadow: unset;
    color: ${palette('grayLight')};

    & {
      ${theme('fannypack.Textarea.disabled')};
    }
  }

  &:focus {
    outline: unset;
    z-index: 2;
    border-color: ${palette('primaryLighter')};
    box-shadow: ${palette('primaryLighter')} 0px 0px 0px 1px !important;

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
    ${props =>
      props.isFullWidth &&
      css`
        width: 100%;
      `};
  }
  & {
    ${props => props.styledSize && sizeProperties[props.styledSize]};
  }
  & {
    ${props => props.state && stateProperties};
  }

  ${theme('fannypack.Textarea.base')};
`;
