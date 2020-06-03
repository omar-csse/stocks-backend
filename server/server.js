require('dotenv').config()
const express = require('express');
const https = require('https')
const fs = require('fs')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const compression = require('compression');

const err = require('../models/errors')

const apiRouter = require('../routes/api/api')
const stocksRouter = require('../routes/stocks/stocks')
const userRouter = require('../routes/user/user')

const StocksDB = require('../config/db');

const port = process.env.PORT || 443;
const localhost = 'https://localhost';

const httpsOptions = {
    key: fs.readFileSync('/etc/ssl/private/node-selfsigned.key', 'utf8'),
    cert: fs.readFileSync('/etc/ssl/certs/node-selfsigned.crt', 'utf8')
}


const app = express();
app.use(cors(), helmet(), compression(), bodyParser.json(), morgan('tiny'));
app.use(express.urlencoded({extended: true}));


/* Routes */
app.use('/api', apiRouter)
app.use('/stocks', stocksRouter)
app.use('/user', userRouter)

/* Hanlde 404 routes */
app.get('*', (req, res) => res.status(404).send(err.err_404_page))


const main = async () => {
    https.createServer(httpsOptions, app).listen(port)
    await StocksDB.connectToDB();
    await StocksDB.createUsersTabel()
    return console.debug(`🚀  Server listening on ${localhost}:${port}`);
}

main();