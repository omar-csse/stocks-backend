const StocksDB = require('../config/db')


const addUser = async (email, password) => {
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)'
    const result = await StocksDB.db.execute(query, [email, password])
    return result  
}


module.exports = addUser;