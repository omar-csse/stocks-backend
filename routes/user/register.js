const router = require('express').Router();
const bcrypt = require('bcryptjs')
const getUser = require('../../db/getUser')
const addUser = require('../../db/addUser')
const h = require('../../models/helper')
const err = require('../../models/errors')


router.post('/', async (req, res) => {
    try {
        if (!h.validCredentials(req.body)) {
            res.status(400).send(err.err_400_auth)
            return;
        } 

        users = await getUser(req.body.email)
        if (users.length > 0) {
            res.status(409).send(err.err_409_register)
            return;
        }

        const hash = await bcrypt.hash(req.body.password, 10)
        await addUser(req.body.email, hash)
        res.status(201).send({"success": true, "message": "User created"})

    } catch (error) {
        console.log(`💽  StocksDB: ${error.sqlMessage || 'Error'}`)
        res.status(502).send(err.err_502_db)
    }
})


module.exports = router;