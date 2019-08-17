import {
  darken as _darken,
  lighten as _lighten,
  shade as _shade,
  readableColor as _readableColor,
  tint as _tint
} from 'polished';

export function darken(scale, color) {
  try {
    return _darken(scale, color);
  } catch (err) {
    return undefined;
  }
}

export function lighten(scale, color) {
  try {
    return _lighten(scale, color);
  } catch (err) {
    return undefined;
  }
}

export function shade(scale, color) {
  try {
    return _shade(scale, color);
  } catch (err) {
    return undefined;
  }
}

export function readableColor(color) {
  try {
    return _readableColor(color);
  } catch (err) {
    return undefined;
  }
}

export function tint(scale, color) {
  try {
    return _tint(scale, color);
  } catch (err) {
    return undefined;
  }
}
