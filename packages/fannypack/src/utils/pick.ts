export const pick = (obj, ...props) => {
  let object = {};
  props.forEach((prop) => {
    if (prop in obj) {
      object[prop] = obj[prop];
    }
  });
  return object;
};
