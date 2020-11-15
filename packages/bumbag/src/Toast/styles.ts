import { css, cssClass, keyframes } from '../styled';
import { theme } from '../utils';

export const Toast = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const ToastOverlay = (styleProps) => cssClass`
  && {
    min-width: 350px;
    z-index: 19900411;
  }

  & .bb-Toast {
    animation: ${getAnimation(styleProps)} 250ms ease-in-out forwards;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

const getAnimation = (styleProps) => keyframes`
  from {
    ${
      styleProps.fade &&
      css`
        opacity: 0;
      `
    }

    ${
      styleProps.slide &&
      css`
        ${
          ['top-end', 'right', 'bottom-end'].includes(styleProps.placement) &&
          css`
            transform: translateX(${styleProps.fade ? '10%' : '130%'});
          `
        }
        ${
          ['bottom'].includes(styleProps.placement) &&
          css`
            transform: translateY(${styleProps.fade ? '10%' : '130%'});
          `
        }
        ${
          ['top-start', 'left', 'bottom-start'].includes(styleProps.placement) &&
          css`
            transform: translateX(${styleProps.fade ? '-10%' : '-130%'});
          `
        }
        ${
          ['top'].includes(styleProps.placement) &&
          css`
            transform: translateY(${styleProps.fade ? '-10%' : '-130%'});
          `
        }
      `
    }
  }

  to {
    ${
      styleProps.fade &&
      css`
        opacity: 1;
      `
    }

    ${
      styleProps.slide &&
      css`
        ${['top-end', 'right', 'bottom-end', 'top-start', 'left', 'bottom-start'].includes(styleProps.placement) &&
        css`
          transform: translateX(0);
        `} ${['bottom', 'top'].includes(styleProps.placement) &&
        css`
          transform: translateY(0);
        `};
      `
    }
  }
`;
