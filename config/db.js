const mysql = require('mysql2/promise');


class StocksDB {
    static async connectToDB() {
        this.db = mysql.createPool(this.ConnectionInfo);
        await this.db.getConnection()
            .then(_ => console.log(`💽  StocksDB: is connected`))
            .catch(err => console.log(`💽  StocksDB: ${err}`))            
    }

    static async createUsersTabel() {
        const query = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(80) NOT NULL UNIQUE, password VARCHAR(80) NOT NULL)";
        await this.db.execute(query)
            .then(_ => console.log(`💽  StocksDB: users table created`))
            .catch(err => console.log(`💽  StocksDB: ${err}`))
    }
}


StocksDB.db = null
StocksDB.ConnectionInfo = {
    connectionLimit : 10,
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_ROOT_PASSWORD,
    database : process.env.MYSQL_DATABASE
}


module.exports = StocksDB;