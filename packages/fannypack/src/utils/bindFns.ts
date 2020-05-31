export const bindFns = (...fns: Array<Function>) => (...args: any) => {
  fns.forEach((fn) => fn && fn(...args));
};
