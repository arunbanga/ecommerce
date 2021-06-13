const setObjectValue = (obj, val) => {
  const oldObj = obj;
  Object.keys(obj).forEach((k) => (obj[k] = val));
  return { ...oldObj, ...obj };
};
export default setObjectValue;
