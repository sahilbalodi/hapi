module.exports = (firstParameter, secondParameter) => {
  if ((typeof (firstParameter) === 'string') && (typeof (secondParameter) === 'string')) {
    return true;
  }
  return null;
};
