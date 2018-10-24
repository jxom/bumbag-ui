// @flow
import styled, { css } from 'reakit/styled';
import { tint } from 'polished';
import { palette, theme } from 'styled-tools';
import Input from 'reakit/Input';

const sizeProperties = {
  small: css`
    font-size: 0.8rem;

    & {
      ${theme('Input.sizes.small')};
    }
  `,
  medium: css`
    font-size: 1.25rem;

    & {
      ${theme('Input.sizes.medium')};
    }
  `,
  large: css`
    font-size: 1.5rem;

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
