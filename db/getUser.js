const StocksDB = require('../config/db')


const getUser = async (email) => {
    const query = 'SELECT * FROM users WHERE email = ?'
    const [rows, _] = await StocksDB.db.execute(query, [email])
    return rows  
}


module.exports = getUser;