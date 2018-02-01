module.exports = (firstParameter, secondParameter) => {
  if ((firstParameter === undefined) && (secondParameter === undefined)) {
    return null;
  } else if ((typeof (firstParameter) === 'number') || (typeof (secondParameter) === 'number')) {
    return null;
  }
  return true;
};
