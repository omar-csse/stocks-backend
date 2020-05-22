const StocksDB = require('../config/db')


const getStocks = async () => {
    const query = 'SELECT DISTINCT symbol, name, industry FROM stocks'
    const [rows, _] = await StocksDB.db.execute(query)
    return rows  
}


module.exports = getStocks;