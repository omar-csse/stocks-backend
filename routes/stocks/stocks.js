const router = require('express').Router();
const symbolsRouter = require('./symbols')
const authedRouter = require('./authed')


router.use('/symbols', symbolsRouter)
router.use('/authed', authedRouter)


module.exports = router;