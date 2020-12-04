const express = require('express');
const app = express();
const { turnItemIntoString, placeStringIntoArray, stripAwayExcessCharacters, lookAtThePieces } = require('./utils');
const { Stack } = require('./stack');


app.use(express.json());

app.get('/', (req, res) =>{
    console.log(req.body);
    res.send('Hi there!');
})

app.post('/lint', (req, res) =>{
    console.log(req.body);
    //console.log(add, getFirstInArray);
    // console.log(add.JSON.stringify());

    res.send('Hi there!');

    if(item === '(' || '[' || '{') {
        // add item to the STACK
    } else if(item === ')') {
        // check to see if it matches item on TOP of STACK
        // if it's a match, remove item from TOP of STACK
        // if it's not a match, send the ERROR message
    } else if(item === ']') {
        // check to see if it matches item on TOP of STACK
        // if it's a match, continue
        // if it's not a match, send the ERROR message
    } else if(item === '}') {
        // check to see if it matches item on TOP of STACK
        // if it's a match, continue
        // if it's not a match, send the ERROR message
     } else if(!item) {
         // return SUCCESS message
     } else {
         // return ERROR message
     }


    

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


})


app.listen(1234, () => {
    console.log('started on PORT 1234');
})
