class Stack {
    stack;
  
    constructor() {
      this.stack = [];
    }
  
    // put item on top of stack
    push(item) {
        this.stack.push(item)
        console.log('This item was pushed: ' + item);
    }
    
    // take item off the top of stack and return that item
    pop() {
        const poppedItem = this.stack.pop();
        console.log('This item was popped: ' + poppedItem);
        return poppedItem;
    }
  
    // look at item on top of stack
    peek() {
        console.log(this.stack);
        const [ lastItem ] = this.stack.slice(-1);
        console.log('LAST ITEM:')
        console.log(lastItem)

        // const lastItemIndex = this.stack.length;
        // console.log(lastItemIndex);

        // const lastItemNumber = parseInt(lastItemIndex);
        // console.log(lastItemNumber); 
    }
  }

  module.exports = Stack;