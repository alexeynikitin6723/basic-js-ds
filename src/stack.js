const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  chain = [];
  push(element) {
     this.chain.push(element);
  }

  pop() {
    return this.chain.pop();
  }

  peek() {
    return this.chain[this.chain.length-1];
  }
}

module.exports = {
  Stack
};
