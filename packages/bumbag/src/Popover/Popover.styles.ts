import { css, cssClass } from '../styled';
import { altitude, palette, space, theme, borderRadius, fontWeight } from '../utils';
import { getAnimatedAttributes } from '../Modal/Modal.styles';

export const Popover = (styleProps) => cssClass`
  background-color: ${palette('background')(styleProps)};
  border-radius: ${borderRadius('default')(styleProps)};
  max-width: 350px;
  z-index: 19900410;

  ${altitude('200')(styleProps)};

  ${getPlacementAttributes(styleProps)}

  &[hidden] {
    display: inherit !important;
    visibility: hidden !important;
  }

  &:focus {
    outline: none;
    box-shadow: ${palette('primary200', { dark: 'primary' })(styleProps)} 0px 0px 0px 3px;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PopoverContent = (styleProps) => cssClass`
  padding: ${space(2, 'minor')(styleProps)}rem ${space(3, 'minor')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PopoverHeader = (styleProps) => cssClass`
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${palette('white800', { dark: 'gray700' })(styleProps)};
  padding: ${space(2, 'minor')(styleProps)}rem ${space(3, 'minor')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PopoverTitle = (styleProps) => cssClass`
  font-weight: ${fontWeight('semibold')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PopoverFooter = (styleProps) => cssClass`
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${palette('white800', { dark: 'gray700' })(styleProps)};
  padding: ${space(2, 'minor')(styleProps)}rem ${space(3, 'minor')(styleProps)}rem;

  ${
    styleProps.showActionButtons &&
    styleProps.footer &&
    css`
      justify-content: space-between;
    `
  };

  ${
    styleProps.showActionButtons &&
    !styleProps.footer &&
    css`
      justify-content: flex-end;
    `
  };

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PopoverClose = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PopoverBackdrop = (styleProps) => cssClass`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 19900409;


  ${getAnimatedAttributes({})(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PopoverDisclosure = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const PopoverArrow = (styleProps) => cssClass`
  display: grid;
  overflow: hidden;

  & > svg {
    background-color: transparent;

    & .stroke {
      fill: ${palette('white800', { dark: 'gray700' })(styleProps)};
    }
    & .fill {
      fill: ${palette('background')(styleProps)};
    }
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const getPlacementAttributes = (styleProps) => {
  const placementAttributes: { [key: string]: any } = {
    // @ts-ignore
    top: css`
      ${getAnimatedAttributes({
        prevTransformValue: styleProps.prevTransformValue,
        transformX: '0px',
        transformY: '0px',
        defaultSlide: 'bottom',
        defaultExpand: 'bottom',
        slideOffset: `${styleProps.gutter || '10'}px`,
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.top`)(styleProps)};
      }
    `,
    // @ts-ignore
    bottom: css`
      ${getAnimatedAttributes({
        prevTransformValue: styleProps.prevTransformValue,
        transformX: '0px',
        transformY: '0px',
        defaultSlide: 'top',
        defaultExpand: 'top',
        slideOffset: `${styleProps.gutter || '10'}px`,
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.bottom`)(styleProps)};
      }
    `,
    // @ts-ignore
    left: css`
      ${getAnimatedAttributes({
        prevTransformValue: styleProps.prevTransformValue,
        transformX: '0px',
        transformY: '0px',
        defaultSlide: 'right',
        defaultExpand: 'right',
        slideOffset: `${styleProps.gutter || '10'}px`,
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.left`)(styleProps)};
      }
    `,
    // @ts-ignore
    right: css`
      ${getAnimatedAttributes({
        prevTransformValue: styleProps.prevTransformValue,
        transformX: '0px',
        transformY: '0px',
        defaultSlide: 'left',
        defaultExpand: 'left',
        slideOffset: `${styleProps.gutter || '10'}px`,
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.right`)(styleProps)};
      }
    `,
    // @ts-ignore
    'top-start': css`
      ${getAnimatedAttributes({
        prevTransformValue: styleProps.prevTransformValue,
        transformX: '0px',
        transformY: '0px',
        defaultSlide: 'bottom',
        defaultExpand: 'bottom',
        slideOffset: `${styleProps.gutter || '10'}px`,
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.topStart`)(styleProps)};
      }
    `,
    // @ts-ignore
    'top-end': css`
      ${getAnimatedAttributes({
        prevTransformValue: styleProps.prevTransformValue,
        transformX: '0px',
        transformY: '0px',
        defaultSlide: 'bottom',
        defaultExpand: 'bottom',
        slideOffset: `${styleProps.gutter || '10'}px`,
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.topEnd`)(styleProps)};
      }
    `,
    // @ts-ignore
    'bottom-end': css`
      ${getAnimatedAttributes({
        prevTransformValue: styleProps.prevTransformValue,
        transformX: '0px',
        transformY: '0px',
        defaultSlide: 'top',
        defaultExpand: 'top',
        slideOffset: `${styleProps.gutter || '10'}px`,
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.bottomEnd`)(styleProps)};
      }
    `,
    // @ts-ignore
    'bottom-start': css`
      ${getAnimatedAttributes({
        prevTransformValue: styleProps.prevTransformValue,
        transformX: '0px',
        transformY: '0px',
        defaultSlide: 'top',
        defaultExpand: 'top',
        slideOffset: `${styleProps.gutter || '10'}px`,
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.bottomStart`)(styleProps)};
      }
    `,
  };
  return css`
    ${placementAttributes[styleProps.placement || 'center']};
  `;
};
