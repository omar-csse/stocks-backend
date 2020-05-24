const jwt = require('jsonwebtoken');


const days = (day) => day * 24 * 60 * 60

const createToken = (email) => {
    const exp = Math.floor(Date.now() / 1000) + days(1)
    const token = jwt.sign({email: email, exp}, process.env.JWTSECRET);
    return { token, token_type: "Bearer", expires_in: days(1) }
};


module.exports = createToken