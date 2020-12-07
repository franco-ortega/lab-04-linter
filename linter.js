const Stack = require('./stack');

function linter(strippedString) {

    // The item needs to be put through the STACK
    const testStack = new Stack();

    for(let i = 0; i < strippedString.length; i++) {
        const item = strippedString[i]

        if(item === '(') {
            testStack.push(item)
        } else if(item === '[') {
            testStack.push(item)
        } else if(item === '{') {
            testStack.push(item)
        } else if(item === ')' && testStack.pop() === '(') {
            testStack.pop();
        } else if(item === ')' && testStack.pop() !== '(') {
            testStack.push(item);
        } else if(item === ']' && testStack.pop() === '[') {
            testStack.pop();
        } else if(item === ']' && testStack.pop() !== '[') {
            testStack.push(item);
        } else if(item === '}' && testStack.pop() === '{') {
            testStack.pop();
        } else if(item === '}' && testStack.pop() !== '{') {
            testStack.push(item);
        }
    }
    return testStack;
}

module.exports = {
    linter
}