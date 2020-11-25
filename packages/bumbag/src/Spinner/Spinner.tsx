import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { Size } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Spinner.styles';

export type LocalSpinnerProps = {
  /** Color of the spinner. */
  color?: string;
  /** Duration (or speed) of the spinner animation. */
  duration?: string;
  /** Adds a background 'track' to the spinner. */
  hasTrack?: boolean;
  /** The color of the track. */
  trackColor?: string;
  /** Size of the spinner. */
  size?: Size;
  /** Length of the spinner's perimeter as a percentage. */
  perimeter?: string;
  /** Progress value of the spinner. */
  value?: number;
};
export type SpinnerProps = BoxProps & LocalSpinnerProps;

const useProps = createHook<SpinnerProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.SpinnerWrapper,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });
    const spinnerClassName = useClassName({
      style: styles.Spinner,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'vector',
    });
    const trackCircleClassName = useClassName({
      style: styles.TrackCircle,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'trackCircle',
    });
    const loaderCircleClassName = useClassName({
      style: styles.LoaderCircle,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'loaderCircle',
    });

    const children = (
      <svg viewBox="22 22 44 44" className={spinnerClassName}>
        {props.hasTrack && (
          <circle cx="44" cy="44" r="20" fill="none" strokeWidth="4" className={trackCircleClassName} />
        )}
        <circle cx="44" cy="44" r="20" fill="none" strokeWidth="4" className={loaderCircleClassName} />
      </svg>
    );

    return { ...boxProps, className, children };
  },
  { defaultProps: { color: 'primary', duration: '0.6s', perimeter: '40%' }, themeKey: 'Spinner' }
);

export const Spinner = createComponent<SpinnerProps>(
  (props) => {
    const spinnerProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: spinnerProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Spinner',
    },
    themeKey: 'Spinner',
  }
);
