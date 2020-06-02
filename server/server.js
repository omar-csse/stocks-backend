require('dotenv').config()
const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const compression = require('compression');

const apiRouter = require('../routes/api/api')
const stocksRouter = require('../routes/stocks/stocks')
const userRouter = require('../routes/user/user')

const StocksDB = require('../config/db');

const port = process.env.PORT || 3000;
const localhost = 'http://localhost';


const app = express();
app.use(cors(), helmet(), compression(), bodyParser.json(), morgan('tiny'));
app.use(express.urlencoded({extended: true}));


/* Routes */
app.use('/api', apiRouter)
app.use('/stocks', stocksRouter)
app.use('/user', userRouter)

/* Handle favicon.ico */
app.get('/favicon.ico', (req, res) => res.status(204));


const main = async () => {
    app.listen(port)
    await StocksDB.connectToDB();
    await StocksDB.createUsersTabel()
    return console.debug(`🚀  Server listening on ${localhost}:${port}`);
}

main();