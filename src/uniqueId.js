import _uniqueId from 'lodash/uniqueId';

export const getUniqueId = prefix => _uniqueId(`${prefix}-`);
