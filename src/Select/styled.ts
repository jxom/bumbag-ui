import { palette, theme } from 'styled-tools';
import { tint } from 'polished';
// @ts-ignore
import Input from '@jmoxey/reakit/Input';

import styled, { css } from '../styled';
// @ts-ignore
import Spinner, { LocalSpinnerProps } from '../Spinner';
import { SelectProps } from './Select';

export const Icon = styled.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 2px;
  z-index: 1;
  fill: ${palette('text')};
  transform: translateY(50%);
`;

export const LoadingSpinner = styled(Spinner)`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 12px;
  right: 7px;
  z-index: 1;
`;

const sizeProperties: any = {
  small: css`
    font-size: 0.8rem;

    & + ${Icon} {
      width: 15px;
      height: 15px;
    }
    & + ${LoadingSpinner} {
      width: 10px;
      height: 10px;
      top: 10px;
    }

    & {
      ${theme('fannypack.Select.sizes.small')};
    }
  `,
  medium: css`
    font-size: 1.25rem;

    & + ${Icon} {
      width: 25px;
      height: 25px;
    }
    & + ${LoadingSpinner} {
      width: 20px;
      height: 20px;
      top: 15px;
      right: 10px;
    }

    & {
      ${theme('fannypack.Select.sizes.medium')};
    }
  `,
  large: css`
    font-size: 1.5rem;

    & + ${Icon} {
      width: 30px;
      height: 30px;
    }
    & + ${LoadingSpinner} {
      width: 25px;
      height: 25px;
      top: 16px;
      right: 12px;
    }

    & {
      ${theme('fannypack.Select.sizes.large')};
    }
  `
};

const stateProperties = css<{ state: SelectProps['state'] }>`
  border-color: ${props => palette(`${props.state}Lighter`)(props)};
  box-shadow: ${props => palette(`${props.state}Lighter`)(props)} 0px 0px 0px 1px !important;
`;

export default styled(Input)<LocalSpinnerProps & { // eslint-disable-line
    isPlaceholderSelected: boolean;
    styledSize: SelectProps['size'];
  }
>`
  appearance: none;
  background: linear-gradient(rgb(255, 255, 255), rgb(249, 250, 251));
  border: 1px solid #bdbdbd;
  border-radius: 0.2em;
  color: ${props => (props.isPlaceholderSelected ? tint(0.4, palette('text')(props)) : palette('text')(props))};
  height: 2.5em;
  padding: 0.4em 1.4em 0.4em 0.6em;
  line-height: 1.5;
  width: 100%;

  &[disabled] {
    background: ${palette('whiteDarker')};
    box-shadow: unset;
    color: ${palette('grayLight')};

    & {
      ${theme('fannypack.Select.disabled')};
    }
  }

  &[disabled] + ${Icon} {
    fill: ${palette('grayLight')};
  }

  &:focus {
    outline: unset;
    z-index: 2;
    border-color: ${palette('primaryLighter')};
    box-shadow: ${palette('primaryLighter')} 0px 0px 0px 1px !important;

    & {
      ${theme('fannypack.Select.focus')};
    }
  }

  & {
    ${props => props.styledSize && sizeProperties[props.styledSize]};
  }
  & {
    ${props => props.state && stateProperties};
  }

  ${theme('fannypack.Select.base')};
`;
