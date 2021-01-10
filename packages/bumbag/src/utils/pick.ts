export const pick = (obj, ...props) => {
  let object = {};
  props.forEach((prop) => {
    if (obj && prop in obj) {
      object[prop] = obj[prop];
    }
  });
  return object;
};
