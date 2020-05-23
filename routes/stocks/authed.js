const router = require('express').Router();
const getAuthedStockRecord = require('../../db/getAuthedStockRecord')
const jwtAuth = require('../../middleware/jwt.auth')
const h = require('../../models/helper')
const err = require('../../models/errors')


router.get('/:symbol', jwtAuth, async (req, res) => {
    try {

        if (req.loggedIn) {

            if (h.validDate(req.query)) {
                rows = await getAuthedStockRecord(req.params.symbol, req.query.from, req.query.to)
                rows.length > 0 ? res.send(rows) : res.status(404).send(err.err_404_authed_symbol)
            } else {
                res.status(400).send(err.err_400_authed_symbol)
            }

        } else {
            res.status(403).send(req.err || err.err_403_authed_symbol2)
        }

    } catch (error) {
        console.log(`💽  StocksDB: ${error.sqlMessage || error}`)
        res.status(502).send(err.err_502_db)
    }
})


module.exports = router;