

const validQuery = (query) => {

    let query_len = Object.keys(query).length

    if ((query_len > 0 && query.industry === undefined) || query_len > 1) {
        return false;
    }

    return true 
}


module.exports = {
    validQuery
}