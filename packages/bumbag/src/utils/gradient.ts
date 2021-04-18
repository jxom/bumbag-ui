import { CSSProperties } from '../types';
import { breakpoint, palette } from '../utils/theme';
import { css } from '../styled';
import { cssProps } from './cssProps';

type Opts = {
  direction?: CSSProperties['gradientDirection'];
  from?: CSSProperties['gradientFrom'];
  fromAt?: CSSProperties['gradientFromAt'];
  to?: CSSProperties['gradientTo'];
  toAt?: CSSProperties['gradientToAt'];
  via?: CSSProperties['gradientVia'];
  viaAt?: CSSProperties['gradientViaAt'];
};

function getValue(value, defaultValue) {
  let newValue = value || defaultValue;
  if (typeof newValue !== 'object') {
    newValue = { default: newValue };
  }
  return newValue;
}

export function gradient(opts) {
  return (styleProps) => {
    if (!opts.from && !opts.to) return '';

    const direction = getValue(opts.direction, 'right');
    const from = getValue(opts.from, 'rgba(0,0,0,0)');
    const fromAt = getValue(opts.fromAt, undefined);
    const via = getValue(opts.via, undefined);
    const viaAt = getValue(opts.viaAt, undefined);
    const to = getValue(opts.to, 'rgba(0,0,0,0)');
    const toAt = getValue(opts.toAt, undefined);

    const breakpoints = Object.keys(opts).reduce(
      (breakpoints, stop) => {
        if (typeof opts[stop] !== 'object') return breakpoints;

        const keys = Object.keys(opts[stop] || {});
        return {
          ...breakpoints,
          ...keys.reduce(
            (breakpoints, bp) => ({
              ...breakpoints,
              [bp]: true,
            }),
            {}
          ),
        };
      },
      { default: true }
    );

    // @ts-ignore
    return Object.keys(breakpoints).reduce((style, bp) => {
      const fromColor = palette(from[bp] || from['default'])(styleProps);
      const fromAtStop = fromAt[bp] || fromAt['default'];
      const viaColor = via[bp] || via['default'] ? palette(via[bp] || via['default'])(styleProps) : undefined;
      const viaAtStop = viaAt[bp] || viaAt['default'];
      const toColor = palette(to[bp] || from['default'])(styleProps);
      const toAtStop = toAt[bp] || toAt['default'];

      // eslint-disable-next-line
      const gradientCss = css`background-image: linear-gradient(to ${direction[bp] || direction['default']},${fromColor}${fromAtStop ? ` ${fromAtStop}` : ''},${viaColor ? `${viaColor}${viaAtStop ? ` ${viaAtStop}` : ''},` : ''} ${toColor}${toAtStop ? ` ${toAtStop}` : ''});`;

      if (bp === 'default') {
        return css`
          ${style};
          ${gradientCss};
        `;
      }

      return css`
        ${style};
        ${breakpoint(
          bp,
          css`
            ${gradientCss};
          `
        )(styleProps)};
      `;
    }, '');
  };
}

gradient.text = (styleProps) => {
  if (styleProps.gradientFrom || styleProps.gradientTo) {
    return css`
      background-clip: text;
      color: rgba(0, 0, 0, 0);
    `;
  }
  return '';
};

export function getGradientStyles(opts: Opts) {
  return (styleProps) => {
    const defaultStyles = gradient(opts)(styleProps);
    if (!defaultStyles) return css``;

    const pseudoStyles = Object.entries(styleProps).reduce((styles, [prop, value]) => {
      if (prop[0] === '_') {
        const pseudoSelector = cssProps[prop];
        return css`
          ${styles}
          ${pseudoSelector} {
            ${gradient({
              // @ts-ignore
              direction: value.gradientDirection || opts.direction,
              // @ts-ignore
              from: value.gradientFrom || opts.from,
              // @ts-ignore
              via: value.gradientVia || opts.via,
              // @ts-ignore
              to: value.gradientTo || opts.to,
            })(styleProps)};
          }
        `;
      }
      return styles;
    }, css``);

    return css`
      ${defaultStyles};
      ${pseudoStyles};
    `;
  };
}
