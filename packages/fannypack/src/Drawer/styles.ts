import { css, cssClass } from '../styled';
import { altitude, theme } from '../utils';

export const Drawer = styleProps => cssClass`
  && {
    position: fixed;
    background-color: white;

    ${styleProps.placement === 'left' &&
      css`
        left: 0;
      `}

    ${styleProps.placement === 'right' &&
      css`
        right: 0;
      `}

    ${styleProps.placement === 'top' &&
      css`
        top: 0;
      `}

    ${styleProps.placement === 'bottom' &&
      css`
        bottom: 0;
      `}

    ${(styleProps.placement === 'left' || styleProps.placement === 'right' || styleProps.isFullScreen) &&
      css`
        height: 100vh;
      `}

    ${(styleProps.placement === 'top' || styleProps.placement === 'bottom' || styleProps.isFullScreen) &&
      css`
        width: 100%;
      `}
  }

  ${altitude('300')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const DrawerDisclosure = styleProps => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
