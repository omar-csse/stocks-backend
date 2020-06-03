

const err_502_db = {
    "error": true,
    "message": "Bad Gateway"
}

const err_404_stocks = {
    "error": true,
    "message": "Industry sector not found"
}

const err_400_stocks = {
    "error": true,
    "message": "Invalid query parameter only 'industry' is permitted"
}

const err_404_symbol = {
    "error": true,
    "message": "No entry for symbol in stocks database"
}

const err_400_symbol = {
    "error": true,
    "message": "Date parameters only available on authenticated route /stocks/authed"
}

const err_400_symbol2 = {
    "error": true,
    "message": "Stcok symbol incorrect format - must be 1-5 letters"
}

const err_404_authed_symbol = {
    "error": true,
    "message": "No entries available for query symbol for supplied date range"
}

const err_400_authed_symbol = {
    "error": true,
    "message": "Invalid date, parameters allowed are 'from' and 'to', example /stocks/authed/AAL?from=2020-03-15"
}

const err_403_authed_symbol1 = {
    "error": true,
    "message": "Authorization header not found"
}

const err_403_authed_symbol2 = {
    "error": true,
    "message": "Invalid Token"
}

const err_400_auth = {
    "error": true,
    "message": "Request body incomplete - a valid email and password needed"
}

const err_409_register = {
    "error": true,
    "message": "User already exists!"
}

const err_401_login = {
    "error": true,
    "message": "Incorrect email or password"
}

const err_404_page = {
    "error": true,
    "message": "Not Found"  
}


module.exports = {
    err_502_db,
    err_404_stocks,
    err_400_stocks,
    err_404_symbol,
    err_400_symbol,
    err_400_symbol2,
    err_404_authed_symbol,
    err_400_authed_symbol,
    err_403_authed_symbol1,
    err_403_authed_symbol2,
    err_400_auth,
    err_409_register,
    err_401_login,
    err_404_page,
}