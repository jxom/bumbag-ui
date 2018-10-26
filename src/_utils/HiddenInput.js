import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { tint } from 'polished';
import Input from 'reakit/Input';

export default ({ Icon, disabledTickCss, tickCss, themePrefix }) => styled(Input)`
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  width: 1px;

  &[disabled] + ${Icon} {
    background-color: ${palette('whiteDarker')};
    box-shadow: unset;

    & {
      ${theme(`${themePrefix}.icon.disabled`)};
    }
  }
  &:focus + ${Icon} {
    border-color: ${props => tint(0.3, palette('primary')(props))};
    box-shadow: ${props => tint(0.3, palette('primary')(props))} 0px 0px 0px 1px !important;

    & {
      ${theme(`${themePrefix}.icon.focus`)};
    }
  }
  &:not([disabled]):checked + ${Icon} {
    border-color: ${props => tint(0.3, palette('primary')(props))};
  }
  &:checked + ${Icon} {
    & {
      ${props =>
        props.state &&
        css`
          box-shadow: ${props => tint(0.3, palette('primary')(props))} 0px 0px 0px 1px !important;
        `};
    }

    &::before {
      ${tickCss};
      ${theme(`${themePrefix}.icon.tick`)};
    }

    & {
      ${theme(`${themePrefix}.icon.checked`)};
    }
  }
  &[disabled]:checked + ${Icon}::before {
    ${disabledTickCss};
  }
`;
