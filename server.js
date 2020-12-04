const express = require('express');
const app = express();
//const { add, getFirstInArray } = require('./data');


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
