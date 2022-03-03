// Rest parameters
const filter = (obj, ...allowedFields) => {
  const newObj = {};

  // Get the obj properties
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });

  return newObj;
};

module.exports = { filter };
