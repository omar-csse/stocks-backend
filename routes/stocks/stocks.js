const router = require('express').Router();
const getStocks = require('../../db/getStocks')


router.get('/symbols', async (req, res) => {
    try {
        rows = await getStocks()
        res.send(rows) 
    } catch (error) {
        res.send(error.sqlMessage)
    }
})


module.exports = router;