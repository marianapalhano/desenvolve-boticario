const conexao = require('./conexao');

const executeQuery = (query, params = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, params, (err, result, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

module.exports = executeQuery;