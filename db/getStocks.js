const StocksDB = require('../config/db')


const getStocks = async (industry) => {
    const query = 'SELECT DISTINCT symbol, name, industry FROM stocks WHERE industry LIKE ?'
    const [rows, _] = await StocksDB.db.execute(query, [`%${industry}%`])
    return rows  
}


module.exports = {
    getStocks
}