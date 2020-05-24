const StocksDB = require('../config/db')
const h = require('../models/helper')


const getAuthedStockRecord = async (symbol, from, to) => {
    const query = `SELECT * FROM stocks WHERE symbol = ? AND timestamp BETWEEN from_unixtime(?) AND from_unixtime(?)`
    const pFrom = h.tstamp(from) || (1 / 1000)
    console.log(`pFrom: ${pFrom}`)
    const pTo = h.tstamp(to) || (Date.now() / 1000)
    const [rows, _] = await StocksDB.db.execute(query, [symbol, pFrom, pTo])
    return rows
}


module.exports = getAuthedStockRecord;