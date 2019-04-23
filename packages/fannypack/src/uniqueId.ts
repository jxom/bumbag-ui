// @ts-ignore
import _uniqueId from 'lodash/uniqueId';

export const getUniqueId = (prefix: string): string => _uniqueId(`${prefix}-`);
