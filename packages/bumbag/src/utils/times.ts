export const times = (n, func = (i) => i) => Array.from({ length: n }).map((_, i) => func(i));
