const StocksDB = require('../config/db')


const getUser = async (email) => {
    const query = 'SELECT * FROM users WHERE email = ?'
    console.log(email)
    
    try {
        const [rows, _] = await StocksDB.db.execute(query, [email])
        return rows
    } catch (error) {
        console.log(error)
    }
}


module.exports = getUser;