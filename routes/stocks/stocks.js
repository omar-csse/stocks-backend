const router = require('express').Router();
const symbolsRouter = require('./symbols')


router.use('/symbols', symbolsRouter)


module.exports = router;