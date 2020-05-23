

const validIndustry = (query) => {

    let query_len = Object.keys(query).length

    if ((query_len > 0 && query.industry === undefined) || query_len > 1) {
        return false;
    }

    return true 
}

const validDate = (query) => {

    for (const [key, value] of Object.entries(query)) {
        if (key !== 'from' && key !== 'to') return false
        if (value && isNaN(Date.parse(value))) return false
    }

    return true; 
}

const tstamp = (date) => {
    return Date.parse(date) / 1000
}


module.exports = {
    validIndustry,
    validDate,
    tstamp
}