const mysql = require('mysql2/promise');


class StocksDB {
    static async connectToDB() {
        this.db = mysql.createPool(this.ConnectionInfo);
        await this.db.getConnection()
            .then(_ => console.log(`💽  StocksDB: is connected`))
            .catch(err => console.log(`💽  StocksDB: ${err.message}`))            
    }

    static async createUsersTabel() {
        const query = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(80) NOT NULL UNIQUE, password VARCHAR(80) NOT NULL)";
        await this.db.execute(query)
            .then(_ => console.log(`💽  StocksDB: users table created`))
            .catch(err => console.log(`💽  StocksDB: ${err.message}`))
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