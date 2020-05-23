const mysql = require('mysql2/promise');


class StocksDB {
    static async connectToDB() {
        try {
            this.db = mysql.createPool(this.ConnectionInfo);
            await this.db.getConnection((err) => console.log(`💽  StocksDB: ${err ? err.sqlMessage : "is connected"}`))
        } catch (error) {
            console.log(`💽  StocksDB: ${error}`)
        }
    }
}


StocksDB.db = null
StocksDB.ConnectionInfo = {
    connectionLimit : 10,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
}


module.exports = StocksDB;