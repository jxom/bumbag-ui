import { unstable_useId } from 'reakit/Id';

const defaultPrefix = 'id-';

export const generateId = (prefix = defaultPrefix) =>
  process.env.BUMBAG_ENV === 'test' ? '' : `${prefix}${Math.random().toString(32).substr(2, 6)}`;

export function useUniqueId() {
  const { id } = unstable_useId();
  return process.env.BUMBAG_ENV === 'test' ? 'id-test' : id;
}
