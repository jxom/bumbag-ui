// @flow
import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { tint } from 'polished';

import Spinner from '../Spinner';

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

const sizeProperties = {
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

const stateProperties = css`
  border-color: ${props => tint(0.3, palette(props.state)(props))}
  box-shadow: ${props => tint(0.3, palette(props.state)(props))} 0px 0px 0px 1px !important;
`;

export default styled.select`
  appearance: none;
  background: linear-gradient(rgb(255, 255, 255), rgb(249, 250, 251));
  border: 1px solid #bdbdbd;
  border-radius: 0.2em;
  color: ${props => (props.isPlaceholderSelected ? tint(0.4, palette('text')(props)) : palette('text')(props))};
  padding: 0.4em 1.4em 0.4em 0.6em;
  line-height: 1.5;
  width: 100%;

  &[disabled] {
    background: ${palette('whiteDarker')};
    box-shadow: unset;
    color: ${palette('grayLight')}

    & {
      ${theme('fannypack.Select.disabled')}
    }
  }
  &[disabled] + ${Icon} {
    fill: ${palette('grayLight')}
  }

  &:focus {
    outline: unset;
    z-index: 2;
    border-color: ${props => tint(0.3, palette('primary')(props))}
    box-shadow: ${props => tint(0.3, palette('primary')(props))} 0px 0px 0px 1px !important;

    & {
      ${theme('fannypack.Select.focus')}
    }
  }

  & {
    ${props => props.size && sizeProperties[props.size]}
  }
  & {
    ${props => props.state && stateProperties}
  }

  ${theme('fannypack.Select.base')};
`;
