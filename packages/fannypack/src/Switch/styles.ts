import { css, cssClass } from '../styled';
import { palette, tint, theme, fontWeight } from '../utils';
import { getHiddenInputStyles } from '../utils/getHiddenInputStyles';

export const Switch = (styleProps) => cssClass`
  && {
    display: flex;
    align-items: center;
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const SwitchIcon = (styleProps) => cssClass`
  background-color: ${palette('background')(styleProps)};
  border: 1px solid #bdbdbd;
  border-radius: 1em;
  height: 1.5em;
  position: relative;
  width: 2.5em;
  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const SwitchLabel = (styleProps) => cssClass`
  && {
    font-weight: ${fontWeight('normal')(styleProps)};
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const HiddenSwitch = (styleProps) =>
  getHiddenInputStyles({
    iconClassName: 'fp-SwitchIcon',
    checkedCss: css`
      background-color: ${palette(styleProps.palette || 'primary')(styleProps)};
      transition: all ease 0.2s;
    `,
    disabledCheckedCss: css`
      background-color: ${tint(0.5, palette(styleProps.palette || 'primary')(styleProps))};
      border-color: ${tint(0.5, palette(styleProps.palette || 'primary')(styleProps))};
    `,
    disabledUncheckedIconCss: css`
      background: ${palette('white700')(styleProps)};
    `,
    checkedIconCss: css`
      border-color: ${palette(styleProps.palette || 'primary')(styleProps)};
      left: 1.25em;
    `,
    disabledCheckedIconCss: css`
      border-color: ${tint(0.5, palette(styleProps.palette || 'primary')(styleProps))};
    `,
    uncheckedIconCss: css`
      background: ${palette('background')(styleProps)};
      content: '';
      border-radius: 100%;
      border: 1px solid #bdbdbd;
      height: 1em;
      width: 1em;
      top: 0.2em;
      left: 0.2em;
      transition: all ease 0.2s;
      position: absolute;
    `,
    styleProps,
    themeKey: 'Switch.Icon',
  });

export const SwitchGroup = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const SwitchField = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const SwitchGroupField = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
