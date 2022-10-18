const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numlist) {
  let init = 0;
	return numlist.reduce((a, b) => a + b, init);
};

const multiply = function(numlist) {
  return numlist.reduce((a, b) => a * b);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(n) {
	let ans = 1;
  if (n == 0 || n == 1){
    return ans;
  }else{
    for(let i = n; i >= 1; i--){
      ans = ans * i;
    }
    return ans;
  }
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
