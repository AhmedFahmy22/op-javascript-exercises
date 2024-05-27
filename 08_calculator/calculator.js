const add = function(operand1, operand2) {
  return (operand1+operand2);
};

const subtract = function(operand1, operand2) {
	return (operand1-operand2);
};

const sum = function(array) {
	let result = 0;
  array.map(function(num) {result=(result+num)});
  return result;
};

const multiply = function(array) {
  let result = 1;
  array.map(function(num) {result=(result*num)});
  return result;
};

const power = function(operand1, operand2) {
  return (operand1**operand2);
};

const factorial = function(operand) {
  result = 1;
  while(operand>1){
    result *= operand;
    operand--;
  }
  return result;
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
