export const omitBy = (obj, check) => {
  obj = { ...obj };
  Object.entries(obj).forEach(([key, value]) => check(value) && delete obj[key]);
  return obj;
};
