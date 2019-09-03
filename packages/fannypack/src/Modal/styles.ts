import { css, cssClass } from '../styled';
import { space, theme } from '../utils';

export const Modal = styleProps => cssClass`
  position: fixed;
  z-index: 19900410;

  ${getPlacementAttributes(styleProps)}

  & {
    ${theme('Modal.base')(styleProps)};
  }
`;

export const ModalDisclosure = styleProps => cssClass`
  & {
    ${theme('Modal.Disclosure.base')(styleProps)};
  }
`;

export const ModalBackdrop = styleProps => cssClass`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 19900409;

  & {
    ${theme('Modal.Backdrop.base')(styleProps)};
  }
`;

export const getPlacementAttributes = styleProps => {
  const getSlideOffset = ({ position, axis, defaultSlide = undefined }) => {
    let newSlide = typeof styleProps.slide === 'string' ? styleProps.slide : defaultSlide;
    let offset = '';
    if (axis === 'vertical') {
      if (newSlide === 'top') {
        offset = ' - 100%';
      }
      if (newSlide === 'bottom') {
        offset = ' + 100%';
      }
    }
    if (axis === 'horizontal') {
      if (newSlide === 'left') {
        offset = ' - 100%';
      }
      if (newSlide === 'right') {
        offset = ' + 100%';
      }
    }
    return `calc(${position}${offset})`;
  };

  const getAnimatedAttributes = opts => {
    if (!styleProps.slide && !styleProps.expand && !styleProps.fade) return;

    const transitionPropertyValue = [
      (styleProps.slide || styleProps.expand) && 'transform',
      styleProps.fade && 'opacity'
    ]
      .filter(Boolean)
      .join(', ');

    const hiddenTransformX = getSlideOffset({
      position: opts.transformX,
      axis: 'horizontal',
      defaultSlide: opts.defaultSlide
    });
    const hiddenTransformY = getSlideOffset({
      position: opts.transformY,
      axis: 'vertical',
      defaultSlide: opts.defaultSlide
    });
    const slideTransformValue = `translate3d(${styleProps.slide ? hiddenTransformX : opts.transformX}, ${
      styleProps.slide ? hiddenTransformY : opts.transformY
    }, 0px)`;

    const expandTransformOrigins = {
      center: '50% 50%',
      left: '0% 50%',
      right: '100% 50%',
      top: '50% 0%',
      bottom: '50% 100%'
    };
    const expandTransformValue = styleProps.expand ? `scale(0.01)` : undefined;

    const transformValue = [slideTransformValue, expandTransformValue].filter(Boolean).join(' ');

    return css`
      transform-origin: ${expandTransformOrigins[styleProps.expand || 'center']};
      transition-property: ${transitionPropertyValue};
      transition-duration: ${styleProps.duration || '250ms'};
      transition-timing-function: ${styleProps.timingFunction || 'ease-in-out'};
      transition-delay: ${styleProps.delay || '0s'};

      ${styleProps.fade &&
        css`
          opacity: 1;
        `};

      &.hidden {
        transform: ${transformValue};

        ${styleProps.fade &&
          css`
            opacity: 0;
          `};
      }
    `;
  };

  const placementAttributes: { [key: string]: any } = {
    // @ts-ignore
    center: css`
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0px);

      ${getAnimatedAttributes({
        transformX: '-50%',
        transformY: '-50%',
        defaultSlide: 'top'
      })};

      & {
        ${theme('Modal.placements.center')(styleProps)};
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
        defaultSlide: 'top'
      })};

      & {
        ${theme('Modal.placements.top')(styleProps)};
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
        defaultSlide: 'bottom'
      })};

      & {
        ${theme('Modal.placements.bottom')(styleProps)};
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
        defaultSlide: 'left'
      })};

      & {
        ${theme('Modal.placements.left')(styleProps)};
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
        defaultSlide: 'right'
      })};

      & {
        ${theme('Modal.placements.right')(styleProps)};
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
        defaultSlide: 'left'
      })};

      & {
        ${theme('Modal.placements.topStart')(styleProps)};
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
        defaultSlide: 'right'
      })};

      & {
        ${theme('Modal.placements.topEnd')(styleProps)};
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
        defaultSlide: 'bottom'
      })};

      & {
        ${theme('Modal.placements.bottomEnd')(styleProps)};
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
        defaultSlide: 'bottom'
      })};

      & {
        ${theme('Modal.placements.bottomStart')(styleProps)};
      }
    `
  };
  return css`
    ${placementAttributes[styleProps.placement || 'center']};
  `;
};
