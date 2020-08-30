export const omit = (obj, ...keys) => {
  return Object.keys(obj).reduce((newObject, key) => {
    if (keys.indexOf(key) === -1) newObject[key] = obj[key];
    return newObject;
  }, {});
};
