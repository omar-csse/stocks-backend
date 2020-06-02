const router = require('express').Router();
const bcrypt = require('bcryptjs')
const getUser = require('../../db/getUser')
const createToken = require('../../config/tokens')
const h = require('../../models/helper')
const err = require('../../models/errors')


router.post('/', async (req, res) => {
    try {
        if (!h.validCredentials(req.body)) {
            res.status(400).send(err.err_400_auth)
            return;
        } 

        users = await getUser(req.body.email)
        if (users.length === 0) {
            res.status(401).send(err.err_401_login)
            return;
        }

        const match = await bcrypt.compare(req.body.password, users[0].password)
        match ? res.status(200).send(createToken(users[0].email)) : res.status(401).send(err.err_401_login)

    } catch (error) {
        console.log(`💽  StocksDB: ${error.sqlMessage || error}`)
        res.status(502).send(err.err_502_db)
    }
})


module.exports = router;