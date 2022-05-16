
  function returnTwo() {
      return +2
  }

  function greeting(name) {
      return "Hello, " + name
  }

  function add(num1, num2) {
      let sum = +num1 + +num2;
      return +sum;
  }
 
module.exports = {
    returnTwo,
    greeting,
    add
}

