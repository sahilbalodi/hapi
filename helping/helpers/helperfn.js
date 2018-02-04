const verify = require('../verify.js');

module.exports = (context) => {
  const firstParameter = context.data.root.query.name;
  const secondParameter = context.data.root.query.suffix;
  if (verify(firstParameter, secondParameter)) { return firstParameter + secondParameter; }
  return '';
};
