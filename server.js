const express = require('express');
const app = express();
const { turnItemIntoString, placeStringIntoArray, stripAwayExcessCharacters, checkStack } = require('./utils');
const { linter } = require('./linter');

app.use(express.json());

app.post('/lint', (req, res) =>{
    console.log('This is the START of the post ENDPOINT');

    // The item that will be posted needs to be checked for errors (I think???), but that happens later
    const testObject = {
        array: [1, 2, 3],
        speed: 'fast',
        parenthesis: '()'
    };
    console.log('Below this line is the testObject');
    console.log(testObject);

    // The item needs to be put through the functions to transform it into just the necessary characters
    const stringyItem = turnItemIntoString(testObject);
    const allCharacters = placeStringIntoArray(stringyItem)
    const remaingingCharacters = stripAwayExcessCharacters(allCharacters);
    const finalStack = linter(remaingingCharacters);
    const stackResult = checkStack(finalStack);

    console.log('This is the END of the post ENDPOINT');

    res.send(stackResult);
})


app.listen(1234, () => {
    console.log('started on PORT 1234');
})








    // const testObject = req.body;
    // console.log('Below this line is the posted testObject');
    // console.log(testObject)

    //console.log(stringyItem);
    //console.log(allCharacters);
    // console.log('Below this line is the remaingingCharacters');
    // console.log(remaingingCharacters);







    



// app.get('/', (req, res) =>{
//     console.log(req.body);
//     res.send('Hi there!');
// })


    // if (lintedItem === true) {
    //     const answer = {
    //         "success": true
    //       };
    //       return answer;
    // } else if (lintedItem = false) {
    //     const answer = {
    //         "error": "missing `{`"
    //       };
    //       return answer;
    // }
    // res.send(answer);

