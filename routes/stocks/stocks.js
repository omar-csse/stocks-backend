const router = require('express').Router();
const getStocks = require('../../db/getStocks')
const err = require('../../models/errors')


router.get('/symbols', async (req, res) => {
    try {
        rows = await getStocks(req.query.industry || '')
        rows.length > 0 ? res.send(rows) : res.status(404).send(err.err_404_stocks)
    } catch (error) {
        res.status(502).send(err.err_502_db)
    }
})


module.exports = router;