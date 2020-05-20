require('dotenv').config()
const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const compression = require('compression');

const port = process.env.PORT || 4000;
const localhost = 'http://localhost';

const app = express();
app.set('json spaces', 4)
app.use(helmet(), compression(), bodyParser.json(), morgan('tiny'));
app.use(express.urlencoded({extended: true}));


const main = () => {
    app.listen(port);
    return console.debug(`🚀  Server listening on ${localhost}:${port}`);
}

main();