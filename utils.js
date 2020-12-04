function turnItemIntoString(obj) {
    const stringyObject = JSON.stringify(obj);
    return stringyObject;

    // let objectInArray = []
    // objectInArray = objectInArray.push(stringyObject);
    // return objectInArray;

}

function placeStringIntoArray(string) {
    let [ ...array ] = string
    // console.log('Below this line is the array')
    // console.log(array);
    return array;
}

function stripAwayExcessCharacters(array) {
    // let [ ...array ] = item
    // console.log('Below this line is the array')
    // console.log(array);

    //return array.filter(character => character === '}')

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

function lookAtThePieces() {

}

const testObject = {
    name: 'lila',
    hair: 'green',
    speed: 'swift',
    array: [1, 2, 3],
    parenthesis: '()'
}
console.log('Below this line is the testObject');
console.log(testObject);

const testString = turnItemIntoString(testObject);
console.log('Below this line is the testString');
console.log(testString);

const arrayString = placeStringIntoArray(testString)
console.log('Below this line is the arrayString');
console.log(arrayString);

const strippedString = stripAwayExcessCharacters(arrayString);

console.log('Below this line is the strippedString');
console.log(strippedString);

module.exports = {
    turnItemIntoString,
    placeStringIntoArray,
    stripAwayExcessCharacters,
    lookAtThePieces
}
