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
    }
  
    // look at item on top of stack
    peek() {
        const lastItemIndex = this.stack.length;
        console.log(lastItemIndex);

        const lastItemNumber = parseInt(lastItemIndex);
        console.log(lastItemNumber);
        console.log(this.stack);

        // const [ ...most, last ] = this.stack;
        // console.log(last);

        const [ lastItem ] = this.stack.slice(-1);
        console.log(lastItem)
        
    }
  }

  const testItem = new Stack;
  console.log(testItem);

  testItem.push('free')
  console.log(testItem);
  
  testItem.push('wind')
  console.log(testItem);
  
  testItem.push('water')
  console.log(testItem);
  
  testItem.push('earth')
  console.log(testItem);

  testItem.push('pizza')
  console.log(testItem);

  testItem.push('pumkpin pie')
  console.log(testItem);

  testItem.pop();
  console.log(testItem);
  
  testItem.peek();
  console.log(testItem);
  
  module.exports = Stack;