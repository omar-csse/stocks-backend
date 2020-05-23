require('dotenv').config()
const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const compression = require('compression');
const apiRouter = require('../routes/api/main')
const stocksRouter = require('../routes/stocks/stocks')

const StocksDB = require('../config/db');

const port = process.env.PORT || 4000;
const localhost = 'http://localhost';


const app = express();
app.use(helmet(), compression(), bodyParser.json(), morgan('tiny'));
app.use(express.urlencoded({extended: true}));


/* Routes */
app.use('/api', apiRouter)
app.use('/stocks', stocksRouter)


const main = async () => {
    app.listen(port);
    await StocksDB.connectToDB();
    return console.debug(`🚀  Server listening on ${localhost}:${port}`);
}

main();