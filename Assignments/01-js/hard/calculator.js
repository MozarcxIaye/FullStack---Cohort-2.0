/**
 * Calculator Class to perform arithmetic operations and calculate result based on expression
 */
class Calculator {
  constructor() {
    this.result = 0;
  }

  /**
    * Add method to add a number to the result
    * @param {number} num - number to be added
    * @returns {number} updated result
    */
  add(num) {
    return this.result += num;
  }

  /**
    * Subtract method to subtract a number from the result
    * @param {number} num - number to be subtracted
    * @returns {number} updated result
    */
  subtract(num) {
    return this.result -= num;
  }

  /**
    * Multiply method to multiply a number with the result
    * @param {number} num - number to be multiplied
    * @returns {number} updated result
    */
  multiply(num) {
    return this.result *= num;
  }

  /**
    * Divide method to divide the result by a number
    * @param {number} num - number to be divided by
    * @returns {number} updated result
    * @throws {Error} when divided by zero
    */
  divide(num) {
    if (num == 0) {
      throw new Error('Cannot be divided by zero');
    } else {
      return this.result /= num;
    }
  }

  /**
    * Clear method to reset the result to 0
    * @returns {number} updated result (0)
    */
  clear() {
    return this.result = 0;
  }

  /**
    * GetResult method to return the current result
    * @returns {number} current result
    */
  getResult() {
    return this.result;
  }

  /**
    * Calculate method to evaluate a given arithmetic expression and add its result to the current result
    * @param {string} str - arithmetic expression as a string
    * @returns {number} updated result
    * @throws {Error} when the expression is not valid
    */
  calculate(str) {
    str = str.replace(/\s/g, '');
    let res = eval(str);
    if (res == Infinity) {
      throw new Error("The given expression is not valid");
    } else {
      return this.result += res;
    }
  }
}

module.exports = Calculator;