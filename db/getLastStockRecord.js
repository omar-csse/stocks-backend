const mysql = require('mysql2/promise');
const StocksDB = require('../config/db')


const getLastStockRecord = async (symbol) => {
    const query = 'SELECT * FROM stocks WHERE symbol = ? LIMIT 1;'
    const [rows, _] = await StocksDB.db.query(mysql.format(query, [symbol]))
    return rows
}


module.exports = getLastStockRecord;