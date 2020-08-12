import { css, cssClass } from '../styled';
import { palette, theme, fontWeight } from '../utils';
import { getHiddenInputStyles } from '../utils/getHiddenInputStyles';

export const Radio = (styleProps) => cssClass`
  && {
    display: flex;
    align-items: center;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const RadioIcon = (styleProps) => cssClass`
  -webkit-appearance: none;
  background-color: ${palette('default')(styleProps)};
  border: 1px solid ${palette('white900', { dark: 'gray700' })(styleProps)};
  border-radius: 100%;
  height: 1em;
  position: relative;
  min-width: 1em;
  width: 1em;
  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const RadioLabel = (styleProps) => cssClass`
  && {
    font-weight: ${fontWeight('normal')(styleProps)};
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const HiddenRadio = (styleProps) =>
  getHiddenInputStyles({
    iconClassName: 'bb-RadioIcon',
    checkedIconCss: css`
      background: ${palette('primary', { dark: 'primary300' })(styleProps)};
      border-radius: 50%;
      content: '';
      height: 0.5em;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 0.5em;
    `,
    disabledCheckedIconCss: css`
      border-color: ${palette('gray300', { dark: 'gray' })(styleProps)};
      background: ${palette('gray300', { dark: 'gray' })(styleProps)};
    `,
    styleProps,
    themeKey: 'Radio.Icon',
  });

export const RadioField = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const RadioGroup = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const RadioGroupField = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
