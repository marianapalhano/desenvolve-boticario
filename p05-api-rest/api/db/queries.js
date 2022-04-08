const db = require('./connection');

const executeQuery = (query, params = '') => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, result, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

module.exports = executeQuery;