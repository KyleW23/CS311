const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Here');
    // res.send('Hello!');
    // res.sendStatus(500);
    // res.sendStatus(500).json({ message: 'Error' });
    // res.json({ name: 'Joe', age: 19, class: 'sophmore' });
    // res.download('server.js');
});

app.listen(3000);
