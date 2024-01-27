exports.addMeMaybe = function (number, theFunction) {
  number++;
  return theFunction(number);
};
