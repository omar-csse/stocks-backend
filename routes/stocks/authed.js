const router = require('express').Router();
const getAuthedStockRecord = require('../../db/getAuthedStockRecord')
const jwtAuth = require('../../middleware/jwt.auth')
const h = require('../../models/helper')
const err = require('../../models/errors')


router.get('/:symbol', jwtAuth, async (req, res) => {
    try {

        if (!req.loggedIn) {
            res.status(403).send(req.err || err.err_403_authed_symbol2)
            return;
        }
        if (!h.validSymbol(req.params)) {
            res.status(400).send(err.err_404_symbol2)
            return;
        }
        if (!h.validDate(req.query)) {
            res.status(400).send(err.err_400_authed_symbol)
            return;
        }
        
        rows = await getAuthedStockRecord(req.params.symbol, req.query.from, req.query.to)
        rows.length > 0 ? res.send(rows) : res.status(404).send(err.err_404_authed_symbol)

    } catch (error) {
        console.log(`💽  StocksDB: ${error.sqlMessage || error}`)
        res.status(502).send(err.err_502_db)
    }
})


module.exports = router;