const Stack = require('./stack');

function linter(strippedString) {

    // The item needs to be put through the STACK
    const testStack = new Stack();
    console.log('This is the testStack at the START')
    console.log(testStack)

    for(let i = 0; i < strippedString.length; i++) {
        const item = strippedString[i]

        if(item === '(') {
            // add item to the STACK
            testStack.push(item)
        } else if(item === '[') {
            // add item to the STACK
            testStack.push(item)
        } else if(item === '{') {
            // add item to the STACK
            testStack.push(item)
        } else if(item === ')') {
            // check to see if it matches item on TOP of STACK
            // if it's a match, remove item from TOP of STACK
            // if it's not a match, send the ERROR message
            testStack.pop();
        } else if(item === ']') {
            // check to see if it matches item on TOP of STACK
            // if it's a match, continue
            // if it's not a match, send the ERROR message
            testStack.pop();
        } else if(item === '}') {
            // check to see if it matches item on TOP of STACK
            // if it's a match, continue
            // if it's not a match, send the ERROR message
            testStack.pop();
            // if(strippedString.slice(-1) === '{') {
            //     console.log('SLICED BIT BELOW');
            //     console.log(strippedString.slice(-1));
            //     console.log(testStack.pop());
            //     testStack.pop();
            // }
        }
    }

    console.log('This is the testStack at the END')
    console.log(testStack)

    return testStack;
}



module.exports = {
    linter
}