// @ts-ignore
import _uniqueId from 'lodash/uniqueId';

export const getUniqueId = (prefix: string) => _uniqueId(`${prefix}-`);
