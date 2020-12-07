class Stack {
    stack;
  
    constructor() {
      this.stack = [];
    }
  
    // put item on top of stack
    push(item) {
        this.stack.push(item)
    }
    
    // take item off the top of stack and return that item
    pop() {
        const poppedItem = this.stack.pop();
        return poppedItem;
    }
  
    // look at item on top of stack
    peek() {
        const [ lastItem ] = this.stack.slice(-1);
    }
  }

  module.exports = Stack;