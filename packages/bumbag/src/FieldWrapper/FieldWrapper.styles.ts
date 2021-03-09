import { cssClass, css } from '../styled';
import { altitude, palette, space, theme, lineHeight, getCapsizeStyles, fontSize, fontWeight } from '../utils';

export const FieldWrapper = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const Label = (styleProps) => cssClass`
  &&& {
    margin-bottom: 0px;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const LabelWrapper = (styleProps) => cssClass`
  margin-bottom: ${space(3)(styleProps)}rem;

  ${
    (styleProps.variant === 'borderless' || styleProps.variant === 'underline') &&
    css`
      margin-bottom: ${space(1)(styleProps)}rem;
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const DescriptionText = (styleProps) => cssClass`
  display: block;
  margin-top: ${space(2)(styleProps)}rem;

  && {
    ${getCapsizeStyles({ fontSize: '150' })(styleProps)};
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const HintText = (styleProps) => cssClass`
  display: block;
  font-size: ${fontSize('150')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const OptionalText = (styleProps) => cssClass`
  font-size: ${fontSize('150')(styleProps)}rem;
  color: ${palette('text100')(styleProps)};
  margin-left: ${space(2)(styleProps)}rem;
  line-height: ${lineHeight('none')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const RequiredText = (styleProps) => cssClass`
  color: ${palette('danger')(styleProps)};
  margin-left: ${space(1)(styleProps)}rem;
  font-weight: ${fontWeight('semibold')(styleProps)};
  font-size: ${fontSize('150')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const ValidationText = (styleProps) => cssClass`
  display: block;
  font-size: ${fontSize('150')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TooltipTrigger = (styleProps) => cssClass`
  && {
    font-size: ${fontSize('100')(styleProps)}rem;
    padding: ${space(1)(styleProps)}rem;
    min-height: unset;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TooltipPopover = (styleProps) => cssClass`
  && {
    position: absolute;
    padding: ${space(1, 'major')(styleProps)}rem;
    margin-top: ${space(1, 'major')(styleProps)}rem;
    width: max-content;
    max-width: 400px;
    z-index: 999999;
    ${altitude('300')(styleProps)};
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
