const jwt = require('jsonwebtoken');
const err = require('../models/errors')


module.exports = jwtAuth = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWTSECRET, (err, payload) => {
            if (err) next()
            req.email = payload.email;
        });
    } catch (error) {
        req.err = err.err_403_authed_symbol1
        next()
    }

    req.loggedIn = true
    next()
}