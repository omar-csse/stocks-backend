const router = require('express').Router();
const getStocks = require('../../db/getStocks')
const getLastStockRecord = require('../../db/getLastStockRecord')
const helper = require('../../models/helper')
const err = require('../../models/errors')


router.get('/', async (req, res) => {
    try {
        if (helper.validQuery(req.query)) {
            rows = await getStocks(req.query.industry || '')
            rows.length > 0 ? res.send(rows) : res.status(404).send(err.err_404_stocks)
        } 
        else {
            res.status(400).send(err.err_400_stocks)
        }
    } catch (error) {
        console.log(`💽  StocksDB: ${error.sqlMessage || 'Error'}`)
        res.status(502).send(err.err_502_db)
    }
})


router.get('/:symbol' , async (req, res) => {
    try {
        if (Object.keys(req.query).length === 0) {
            rows = await getLastStockRecord(req.params.symbol)
            rows.length > 0 ? res.send(rows) : res.status(404).send(err.err_404_symbol)
        } 
        else {
            res.status(400).send(err.err_400_symbol)
        }
    } catch (error) {
        console.log(`💽  StocksDB: ${error.sqlMessage || 'Error'}`)
        res.status(502).send(err.err_502_db)
    }
})


module.exports = router;