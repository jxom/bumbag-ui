import _throttle from 'lodash/throttle';

export function throttle(fn, throttle) {
  return throttle ? _throttle(fn, throttle === true ? 2000 : throttle, { leading: true, trailing: false }) : fn;
}
