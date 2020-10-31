import { css, cssClass } from '../styled';
import { getHiddenScrollbarStyles, space, theme } from '../utils';

export const Modal = (styleProps) => cssClass`
  position: fixed;
  z-index: 19900410;
  min-width: 320px;

  @media screen and (max-width: 320px) {
    min-width: unset;
    width: 100%;
  }

  ${getPlacementAttributes(styleProps)}

  &:focus {
    outline: none;
  }

  ${getHiddenScrollbarStyles()};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const ModalContainer = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const ModalDisclosure = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const ModalBackdrop = (styleProps) => cssClass`
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

export const getPlacementAttributes = (styleProps) => {
  const placementAttributes: { [key: string]: any } = {
    // @ts-ignore
    center: css`
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0px);

      ${getAnimatedAttributes({
        transformX: '-50%',
        transformY: '-50%',
        defaultSlide: 'top',
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.center`)(styleProps)};
      }
    `,
    // @ts-ignore
    top: css`
      top: ${space(5)(styleProps)}em;
      left: 50%;
      transform: translate3d(-50%, 0, 0px);

      ${getAnimatedAttributes({
        transformX: '-50%',
        transformY: '0px',
        defaultSlide: 'top',
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.top`)(styleProps)};
      }
    `,
    // @ts-ignore
    bottom: css`
      bottom: ${space(5)(styleProps)}em;
      left: 50%;
      transform: translate3d(-50%, 0, 0px);

      ${getAnimatedAttributes({
        transformX: '-50%',
        transformY: '0px',
        defaultSlide: 'bottom',
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.bottom`)(styleProps)};
      }
    `,
    // @ts-ignore
    left: css`
      top: 50%;
      left: ${space(5)(styleProps)}em;
      transform: translate3d(0px, -50%, 0px);

      ${getAnimatedAttributes({
        transformX: '0px',
        transformY: '-50%',
        defaultSlide: 'left',
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.left`)(styleProps)};
      }
    `,
    // @ts-ignore
    right: css`
      top: 50%;
      right: ${space(5)(styleProps)}em;
      transform: translate3d(0px, -50%, 0px);

      ${getAnimatedAttributes({
        transformX: '0px',
        transformY: '-50%',
        defaultSlide: 'right',
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.right`)(styleProps)};
      }
    `,
    // @ts-ignore
    'top-start': css`
      top: ${space(5)(styleProps)}em;
      left: ${space(5)(styleProps)}em;
      transform: translate3d(0, 0, 0px);

      ${getAnimatedAttributes({
        transformX: '0px',
        transformY: '0px',
        defaultSlide: 'left',
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.topStart`)(styleProps)};
      }
    `,
    // @ts-ignore
    'top-end': css`
      top: ${space(5)(styleProps)}em;
      right: ${space(5)(styleProps)}em;
      transform: translate3d(0, 0, 0px);

      ${getAnimatedAttributes({
        transformX: '0px',
        transformY: '0px',
        defaultSlide: 'right',
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.topEnd`)(styleProps)};
      }
    `,
    // @ts-ignore
    'bottom-end': css`
      bottom: ${space(5)(styleProps)}em;
      right: ${space(5)(styleProps)}em;
      transform: translate3d(0, 0, 0px);

      ${getAnimatedAttributes({
        transformX: '0px',
        transformY: '0px',
        defaultSlide: 'bottom',
      })(styleProps)};

      & {
        ${theme(styleProps.themeKey, `styles.placements.bottomEnd`)(styleProps)};
      }
    `,
    // @ts-ignore
    'bottom-start': css`
      bottom: ${space(5)(styleProps)}em;
      left: ${space(5)(styleProps)}em;
      transform: translate3d(0, 0, 0px);

      ${getAnimatedAttributes({
        transformX: '0px',
        transformY: '0px',
        defaultSlide: 'bottom',
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

const getSlideOffset = ({ position, axis, defaultSlide = undefined, slideOffset = '100%' }) => (styleProps) => {
  let newSlide = typeof styleProps.slide === 'string' ? styleProps.slide : defaultSlide;
  let offset = '';
  if (axis === 'vertical') {
    if (newSlide === 'top') {
      offset = ` - ${slideOffset}`;
    }
    if (newSlide === 'bottom') {
      offset = ` + ${slideOffset}`;
    }
  }
  if (axis === 'horizontal') {
    if (newSlide === 'left') {
      offset = ` - ${slideOffset}`;
    }
    if (newSlide === 'right') {
      offset = ` + ${slideOffset}`;
    }
  }
  return `calc(${position}${offset})`;
};

export const getAnimatedAttributes = (opts) => (styleProps) => {
  if (!styleProps.slide && !styleProps.expand && !styleProps.fade) return;

  const transitionPropertyValue = [(styleProps.slide || styleProps.expand) && 'transform', styleProps.fade && 'opacity']
    .filter(Boolean)
    .join(', ');

  const hiddenTransformX = getSlideOffset({
    position: opts.transformX,
    axis: 'horizontal',
    defaultSlide: opts.defaultSlide,
    slideOffset: opts.slideOffset,
  })(styleProps);
  const hiddenTransformY = getSlideOffset({
    position: opts.transformY,
    axis: 'vertical',
    defaultSlide: opts.defaultSlide,
    slideOffset: opts.slideOffset,
  })(styleProps);
  const hiddenSlideTransformValue = `translate3d(${styleProps.slide ? hiddenTransformX : opts.transformX}, ${
    styleProps.slide ? hiddenTransformY : opts.transformY
  }, 0px)`;
  const hiddenExpandTransformValue = styleProps.expand ? `scale(0.01)` : undefined;
  const hiddenTransformValue = [hiddenSlideTransformValue, hiddenExpandTransformValue].filter(Boolean).join(' ');

  const showTransformValue = `translate3d(${opts.transformX}, ${opts.transformY}, 0px) scale(1)`;

  const expandTransformOrigins = {
    center: '50% 50%',
    left: '0% 50%',
    right: '100% 50%',
    top: '50% 0%',
    bottom: '50% 100%',
  };

  return css`
    transform-origin: ${expandTransformOrigins[opts.defaultExpand || styleProps.expand || 'center']};
    align-items: center;
    transition-property: ${transitionPropertyValue};
    transition-duration: ${styleProps.duration || '250ms'};
    transition-timing-function: ${styleProps.timingFunction || 'ease-in-out'};
    transition-delay: ${styleProps.delay || '0s'};
    transform: ${opts.prevTransformValue} ${hiddenTransformValue} !important;

    ${styleProps.fade &&
    css`
      opacity: 0;
    `};

    &[data-enter] {
      transform: ${opts.prevTransformValue} ${showTransformValue} !important;

      ${styleProps.fade &&
      css`
        opacity: 1;
      `};
    }
  `;
};
