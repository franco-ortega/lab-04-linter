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
        result = {
            "error": "missing `{`"
          };
    }
    return result;
}


// const testObject = {
//     name: 'lila',
//     hair: 'green',
//     speed: 'swift',
//     array: [1, 2, 3],
//     parenthesis: '()'
// }
// console.log('Below this line is the testObject');
// console.log(testObject);

// const testString = turnItemIntoString(testObject);
// console.log('Below this line is the testString');
// console.log(testString);

// const arrayString = placeStringIntoArray(testString)
// console.log('Below this line is the arrayString');
// console.log(arrayString);

// const strippedString = stripAwayExcessCharacters(arrayString);

// console.log('Below this line is the strippedString');
// console.log(strippedString);

module.exports = {
    turnItemIntoString,
    placeStringIntoArray,
    stripAwayExcessCharacters,
    checkStack
}
