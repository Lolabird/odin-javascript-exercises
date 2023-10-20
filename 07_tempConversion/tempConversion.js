const convertToCelsius = function(fahrenheit) {
  let celcius = (5/9) * (fahrenheit - 32);

  return +(celcius.toFixed(1))
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (9/5) * celcius + 32;

  return +(fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
