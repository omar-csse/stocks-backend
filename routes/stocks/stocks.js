const router = require('express').Router();
const symbolsRouter = require('./symbols')
const authedRouter = require('./authed')
const getLastStockRecord = require('../../db/getLastStockRecord')
const err = require('../../models/errors')

router.use('/symbols', symbolsRouter)
router.use('/authed', authedRouter)


router.get('/:symbol' , async (req, res) => {
    try {

        if (Object.keys(req.query).length > 0) {
            res.status(400).send(err.err_400_symbol)
            return;
        } 

        rows = await getLastStockRecord(req.params.symbol)
        rows.length > 0 ? res.send(rows) : res.status(404).send(err.err_404_symbol)

    } catch (error) {
        console.log(`💽  StocksDB: ${error.sqlMessage || 'Error'}`)
        res.status(502).send(err.err_502_db)
    }
})


module.exports = router;