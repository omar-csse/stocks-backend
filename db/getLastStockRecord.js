const StocksDB = require('../config/db')


const getLastStockRecord = async (symbol) => {
    const query = 'SELECT * FROM stocks WHERE symbol = ? LIMIT 1;'
    const [rows, _] = await StocksDB.db.execute(query, [`${symbol}`])
    console.log(rows)
    return rows
}


module.exports = getLastStockRecord;