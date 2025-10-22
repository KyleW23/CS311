const express = require('express');
const app = express();

// const logger = (req, res, next) => {
//     console.log(req.originalUrl);
//     next();
// };

app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(logger);

app.get('/', (req, res) => {
    res.render('index', { text: 'Kyle' });
});

const userRouter = require('./routes/users');
const router = require('./routes/users');

app.use('/users', router);

app.listen(3000);

// app.get('/', (req, res) => {
//     // console.log('Here');
//     // res.send('Hello!');
//     // res.sendStatus(500);
//     // res.sendStatus(500).json({ message: 'Error' });
//     // res.json({ name: 'Joe', age: 19, class: 'sophmore' });
//     // res.download('server.js');
// });
