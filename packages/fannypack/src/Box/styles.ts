import _get from 'lodash/get';
import { css, cssClass } from '../styled';
import { breakpoint, theme } from '../utils';
import { ThemeConfig } from '../types';

export const style = styleProps => cssClass`
  & {
    ${styleProps.style};
    ${buildVisibleAttributes(styleProps)};
  }

  ${styleProps.altitude &&
    css`
      & {
        ${theme(`altitudes.${styleProps.altitude}`)(styleProps)};
      }
    `};
`;

export const Box = styleProps => cssClass`
  margin: unset;
  padding: unset;
  border: unset;
  background: unset;
  font: unset;
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;

  &:focus:not(:focus-visible) {
    outline: none;
  }

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;

function buildVisibleAttributes(props: { hiddenBreakpoint?: string; showBreakpoint?: string; theme: ThemeConfig }) {
  let _breakpoint = props.hiddenBreakpoint || props.showBreakpoint;
  if (!_breakpoint) return;

  return breakpoint(
    _breakpoint,
    css`
      display: none;
    `,
    { show: Boolean(props.showBreakpoint) }
  )(props);
}
