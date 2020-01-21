import { css, cssClass } from '../styled';
import { palette, theme } from '../utils';
import { getHiddenInputStyles } from '../utils/getHiddenInputStyles';

export const Checkbox = styleProps => cssClass`
  && {
    display: flex;
    align-items: flex-start;
  }

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const CheckboxIcon = styleProps => cssClass`
  -webkit-appearance: none;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 0.2em;
  height: 1em;
  position: relative;
  min-width: 1em;
  width: 1em;
  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const CheckboxLabel = styleProps => cssClass`
  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const HiddenCheckbox = styleProps =>
  getHiddenInputStyles({
    iconClassName: 'fp-CheckboxIcon',
    checkedIconCss: css`
      background-clip: padding-box;
      content: '';
      left: calc(50% - 0.1875em);
      top: calc(50% - 0.375em);
      position: absolute;

      & {
        ${styleProps.indeterminate
          ? css`
              background-color: ${palette('primary')(styleProps)};
              height: 0.125em;
              width: 0.625em;
              top: calc(50% - 0.0625em);
              left: calc(50% - 0.3125em);
            `
          : css`
              border: 0.1em solid ${palette('primary')(styleProps)};
              border-left-width: 0;
              border-top-width: 0;
              height: 0.625em;
              transform: rotate(45deg);
              width: 0.375em;
            `};
      }
    `,
    disabledCheckedIconCss: css`
      border-color: ${palette('gray300')(styleProps)};
    `,
    styleProps,
    themeKey: 'Checkbox.Icon'
  });
