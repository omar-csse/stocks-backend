const router = require('express').Router();
const h = require('../../models/helper')
const err = require('../../models/errors')


router.get('/', (req, res) => {
    res.send('register')
})


module.exports = router;