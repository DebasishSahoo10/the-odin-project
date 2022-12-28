const add = function(a,b) {
	const sum = Number(a) + Number(b)
  return sum
};

const subtract = function(a,b) {
	const subtraction = Number(a - b)
  return subtraction
};

const sum = function(array) {
  let sum = 0
	for (let i=0; i<array.length; i++) {
    sum = sum + array[i]
  }
  return sum
};

const multiply = function(array) {
  let multi = 1
  for (let i=0; i<array.length; i++) {
    multi = multi * array[i]
  }
  return multi
};

const power = function(a,b) {
	const power = Math.pow(a,b)
  return power
};

const factorial = function(num) {
	let fact = 1
  for (let i=1; i<=num; i++) {
    fact = fact * i
  }
  return fact
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
