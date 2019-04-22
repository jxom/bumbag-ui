import { Box, Flex } from '../primitives';
import Button from '../Button';
import Heading from '../Heading';
import Icon, { LocalIconProps } from '../Icon/Icon';
import Pane from '../Pane';
import styled, { css, keyframes, palette, space, theme, selector } from '../styled';

import { LocalToastProps } from './Toast';
import { ToastCloseProps } from './ToastClose';
import { ToastTitleProps } from './ToastTitle';

export const ToastClose = styled(Button)<ToastCloseProps>`
  width: 24px;
  min-height: 24px;
  padding: 0;
  text-align: right;

  ${props =>
    props.isAbsolute
      ? css`
          position: absolute;
          right: ${space(2)}rem;
          top: ${space(2)}rem;
        `
      : css`
          margin: 0 ${space(2)}rem;
        `};

  &:hover {
    background-color: ${palette('white700')};
    & {
      ${theme('fannypack.Toast.Close.hover')};
    }
  }

  & {
    ${theme('fannypack.Toast.Close.base')};
  }
`;

export const ToastTitle = styled(Heading)<ToastTitleProps>`
  & {
    ${theme('fannypack.Toast.Title.base')};
  }
`;

export const ToastIconWrapper = styled(Flex)<any>`
  margin-right: ${space(3)}rem;
  margin-left: -${space(1)}rem;
  align-items: center;

  & {
    ${theme('fannypack.Toast.Icon.wrapper')};
  }
`;

export const ToastIcon = styled(Icon)<LocalIconProps>`
  & {
    ${theme('fannypack.Toast.Icon.base')};
  }
`;

export const Content = styled(Flex)`
  padding: ${space(4)}rem;
  padding-left: calc(${space(4)}rem + 5px);
  padding-right: ${space(8)}rem;

  & {
    ${theme('fannypack.Toast.Content.base')};
  }
`;

export const heightCountdown = keyframes`
  from {
    height: calc(100% + 2px);
  }

  to {
    height: 0%;
  }
`;
export const widthCountdown = keyframes`
  from {
    width: calc(100% + 2px);
  }

  to {
    width: 0%;
  }
`;
export const CountdownBar = styled(Box)<{ // eslint-disable-line
  autoDismissTimeout?: number;
  isBackground?: boolean;
  isHorizontal?: boolean;
  type?: string;
}>`
  position: absolute;

  ${props =>
    props.isHorizontal
      ? css`
          border-bottom-right-radius: 3px;
          border-bottom-left-radius: 3px;
          bottom: 0;
          height: 5px;
          right: -1px;
          width: calc(100% + 2px);
        `
      : css`
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          bottom: -1px;
          height: calc(100% + 2px);
          margin-left: -1px;
          width: 5px;
        `};

  ${props =>
    props.type &&
    css`
      background-color: ${props.isBackground ? palette(`${props.type}Tint`) : palette(props.type)};
    `};

  ${props =>
    props.autoDismissTimeout &&
    css`
      ${(props: any) =>
        props.isHorizontal
          ? css`
              animation: ${widthCountdown} ${props.autoDismissTimeout}ms linear forwards;
              border-bottom-left-radius: unset;
            `
          : css`
              animation: ${heightCountdown} ${props.autoDismissTimeout}ms linear forwards;
              border-top-left-radius: unset;
            `};

      & {
        ${theme('fannypack.Toast.CountdownBar.autoDismissTimeout')};
      }
    `};

  ${props =>
    props.isBackground &&
    css`
      & {
        ${theme('fannypack.Toast.CountdownBar.background')};
      }
    `};

  & {
    ${theme('fannypack.Toast.CountdownBar.base')};
  }
`;

const tintAttributes = css<LocalToastProps>`
  background-color: ${props => props.type && palette(`${props.type}Tint`)(props)};
  color: ${props => props.type && palette(`${props.type}TintInverted`)(props)};
  fill: ${props => props.type && palette(`${props.type}TintInverted`)(props)};
  ${theme('fannypack.Toast.tint')};
`;
export const Toast = styled(Pane)<LocalToastProps>`
  align-items: center;
  display: flex;
  font-size: ${theme('fannypack.fontSizes.150')}rem;
  justify-content: space-between;
  position: relative;
  width: 350px;

  &:not(:last-child) {
    margin-bottom: ${space(4)}rem;
  }

  & {
    ${props => props.hasTint && tintAttributes};
  }

  & {
    ${theme('fannypack.Toast.base')};
  }
`;

const fromLeft = keyframes`
  from {
    transform: translateX(-120%);
  }

  to {
    transform: translateX(0);
  }
`;
const fromRight = keyframes`
  from {
    transform: translateX(120%);
  }

  to {
    transform: translateX(0);
  }
`;
const fromTop = keyframes`
  from {
    transform: translateY(-120%);
  }

  to {
    transform: translateY(0);
  }
`;
const fromBottom = keyframes`
  from {
    transform: translateY(120%);
  }

  to {
    transform: translateY(0);
  }
`;
export const placementAttributes: { [key: string]: any } = {
  'top-start': css`
    top: 1rem;
    left: 1rem;

    & ${selector(Toast)} {
      animation: ${fromLeft} 300ms ease-in-out forwards;
    }
  `,
  top: css`
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);

    & ${selector(Toast)} {
      animation: ${fromTop} 300ms ease-in-out forwards;
    }
  `,
  'top-end': css`
    top: 1rem;
    right: 1rem;

    & ${selector(Toast)} {
      animation: ${fromRight} 300ms ease-in-out forwards;
    }
  `,
  left: css`
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);

    & ${selector(Toast)} {
      animation: ${fromLeft} 300ms ease-in-out forwards;
    }
  `,
  right: css`
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);

    & ${selector(Toast)} {
      animation: ${fromRight} 300ms ease-in-out forwards;
    }
  `,
  'bottom-start': css`
    bottom: 1rem;
    left: 1rem;

    & ${selector(Toast)} {
      animation: ${fromLeft} 300ms ease-in-out forwards;
    }
  `,
  bottom: css`
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);

    & ${selector(Toast)} {
      animation: ${fromBottom} 300ms ease-in-out forwards;
    }
  `,
  'bottom-end': css`
    bottom: 1rem;
    right: 1rem;

    & ${selector(Toast)} {
      animation: ${fromRight} 300ms ease-in-out forwards;
    }
  `
};
export const Toasts = styled(Box)<{ placement: string }>`
  position: fixed;
  z-index: 99999;

  ${props => placementAttributes[props.placement]};

  & {
    ${theme('fannypack.Toasts.base')};
  }
`;

export default Toast;
