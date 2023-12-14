const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let arraySum = 0;
  
  for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
  }

	return arraySum;
};

const multiply = function(array) {
  let arrayProd = 1;
  
  for (let i = 0; i < array.length; i++) {
    arrayProd *= array[i];
  }

  return arrayProd;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let factProd = 1; 

  for (let i = a; i > 1; i--) {
    factProd *= i;
  }

	return factProd;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
