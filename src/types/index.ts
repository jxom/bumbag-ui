export * from './props';
export * from './theme';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
