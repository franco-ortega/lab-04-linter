function turnItemIntoString(obj) {
    const stringyObject = JSON.stringify(obj);
    return stringyObject;
}

function placeStringIntoArray(string) {
    let [ ...array ] = string
    // console.log('Below this line is the array')
    // console.log(array);
    return array;
}

function stripAwayExcessCharacters(array) {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        const [ character ] = array[i]

        if(character === '{') {
            newArray = [character, ...newArray]
        } else if(character ==='}') {
            newArray = [...newArray, character]
        } else if(character ==='[') {
            newArray = [...newArray, character]
        } else if(character ===']') {
            newArray = [...newArray, character]
        } else if(character ==='(') {
            newArray = [...newArray, character]
        } else if(character ===')') {
            newArray = [...newArray, character]
        }   
    }
    // console.log('Below this line is the newArray')
    // console.log(newArray);
    return newArray;
}

function checkStack(testStack) {
    let result = 'start';

    if(testStack.stack.length === 0 || undefined) {
        result = {
            "success": true
          };
    } else {
        return errorMessage(testStack);
    }
    return result;
}

function errorMessage(remainingStack) {
    //console.log('This is the remainingStack:')
    //console.log(remainingStack);
    const unmatchedItem = remainingStack.stack.slice(-1);
    //console.log(unmatchedItem[0]);
    const missingItem = missingItemFinder(unmatchedItem[0])

    result = {
        error: `missing ${missingItem}`
      };
      return result
}

function missingItemFinder(unmatchedItem) {
    if(unmatchedItem === '}') {
        return '{'
    } else if(unmatchedItem === '{') {
        return '}'
    } else if(unmatchedItem === ')') {
        return '('
    } else if(unmatchedItem === '(') {
        return ')'
    } else if(unmatchedItem === ']') {
        return '['
    } else if(unmatchedItem === '[') {
        return ']'
    }
}

module.exports = {
    turnItemIntoString,
    placeStringIntoArray,
    stripAwayExcessCharacters,
    checkStack
}
