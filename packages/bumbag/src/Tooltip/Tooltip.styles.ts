import { css, cssClass } from '../styled';
import { borderRadius, fontSize, fontWeight, palette, space, theme } from '../utils';
import { getAnimatedAttributes } from '../Modal/Modal.styles';

export const TooltipContent = (styleProps) => cssClass`
  background: black;
  border-radius: ${borderRadius('1')(styleProps)};
  color: ${palette('white')(styleProps)};
  opacity: 0.8;
  hyphens: auto;
  font-size: ${fontSize('100')(styleProps)}rem;
  font-weight: ${fontWeight('normal')(styleProps)};
  padding: ${space(1)(styleProps)}rem ${space(2)(styleProps)}rem;
  z-index: 19900411;

  ${getPlacementAttributes(styleProps)}

  &[hidden] {
    display: inherit !important;
    visibility: hidden !important;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TooltipReference = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TooltipArrow = (styleProps) => cssClass`
  display: grid;
  overflow: hidden;

  & > svg {
    background-color: transparent;

    & .stroke {
      fill: black;
    }
    & .fill {
      fill: black;
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
