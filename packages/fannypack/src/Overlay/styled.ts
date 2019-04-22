import { InterpolationValue } from 'styled-components';
import { theme } from 'styled-tools';
import _Overlay from 'reakit/Overlay';

import styled, { css, space } from '../styled';
import { OverlayProps } from './Overlay';
import { OverlayHideProps } from './OverlayHide';
import { OverlayShowProps } from './OverlayShow';
import { OverlayToggleProps } from './OverlayToggle';

export const getPlacementAttributes = (props: OverlayProps) => {
  if (!props.placement) return null;

  const getHiddenAttributes = ({ transformX, transformY }: { transformX: string; transformY: string }) => (
    props: any
  ) =>
    css`
      &[aria-hidden='true'] {
        transform: ${`translate3d(${props.slide ? transformX : '0'}, ${props.slide ? transformY : '0'}, 0px) ${
          props.expand ? 'scale(0.01)' : ''
        }`};
      }
    `;

  const placementAttributes: { [key: string]: InterpolationValue[] } = {
    // @ts-ignore
    top: css`
      top: ${space(5)}em;
      left: 50%;
      transform: translate3d(-50%, 0, 0px);

      ${getHiddenAttributes({ transformX: '-50%', transformY: 'calc(50% - 100%)' })};
    `,
    // @ts-ignore
    bottom: css`
      bottom: ${space(5)}em;
      left: 50%;
      transform: translate3d(-50%, 0, 0px);

      ${getHiddenAttributes({ transformX: '-50%', transformY: 'calc(50% + 100%)' })};
    `,
    // @ts-ignore
    left: css`
      top: 50%;
      left: ${space(5)}em;
      transform: translate3d(0px, -50%, 0px);

      ${getHiddenAttributes({ transformX: 'calc(50% - 100%)', transformY: '-50%' })};
    `,
    // @ts-ignore
    right: css`
      top: 50%;
      right: ${space(5)}em;
      transform: translate3d(0px, -50%, 0px);

      ${getHiddenAttributes({ transformX: 'calc(50% + 100%)', transformY: '-50%' })};
    `,
    // @ts-ignore
    'top-start': css`
      top: ${space(5)}em;
      left: ${space(5)}em;
      transform: translate3d(0, 0, 0px);

      ${getHiddenAttributes({ transformX: '0', transformY: 'calc(50% - 100%)' })};
    `,
    // @ts-ignore
    'top-end': css`
      top: ${space(5)}em;
      right: ${space(5)}em;
      transform: translate3d(0, 0, 0px);

      ${getHiddenAttributes({ transformX: '0', transformY: 'calc(50% - 100%)' })};
    `,
    // @ts-ignore
    'bottom-end': css`
      bottom: ${space(5)}em;
      right: ${space(5)}em;
      transform: translate3d(0, 0, 0px);

      ${getHiddenAttributes({ transformX: '0', transformY: 'calc(50% + 100%)' })};
    `,
    // @ts-ignore
    'bottom-start': css`
      bottom: ${space(5)}em;
      left: ${space(5)}em;
      transform: translate3d(0, 0, 0px);

      ${getHiddenAttributes({ transformX: '0', transformY: 'calc(50% + 100%)' })};
    `
  };
  return css`
    top: unset;
    left: unset;
    ${placementAttributes[props.placement]};
  `;
};

export const OverlayHide = styled(_Overlay.Hide)<OverlayHideProps>`
  ${theme('fannypack.Overlay.Hide.base')};
`;

export const OverlayShow = styled(_Overlay.Show)<OverlayShowProps>`
  ${theme('fannypack.Overlay.Show.base')};
`;

export const OverlayToggle = styled(_Overlay.Toggle)<OverlayToggleProps>`
  ${theme('fannypack.Overlay.Toggle.base')};
`;

export const Overlay = styled(_Overlay)<OverlayProps>`
  & {
    ${getPlacementAttributes};
  }

  ${theme('fannypack.Overlay.base')};
`;

export default Overlay;
