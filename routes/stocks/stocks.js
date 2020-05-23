const router = require('express').Router();
const getStocks = require('../../db/getStocks')
const helper = require('../../models/helper')
const err = require('../../models/errors')


router.get('/symbols', async (req, res) => {
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


module.exports = router;