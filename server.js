const express = require('express');
const app = express();
const { turnItemIntoString, placeStringIntoArray, stripAwayExcessCharacters, checkStack } = require('./utils');
const { linter } = require('./linter');

app.use(express.json());

app.post('/api/v1/lint', (req, res) =>{

    const stringyItem = turnItemIntoString(req.body.code);
    const allCharacters = placeStringIntoArray(stringyItem)
    const remaingingCharacters = stripAwayExcessCharacters(allCharacters);
    const finalStack = linter(remaingingCharacters);
    const stackResult = checkStack(finalStack);

    res.send(stackResult);
})

app.listen(1234, () => {
    console.log('started on PORT 1234');
})