const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    console.log(req.body);
    res.send('Hi there!');
})

app.listen(1234, () => {
    console.log('started on PORT 1234');
})
