const query = require('../db/queries');

class Atendimento {
    add(atendimento) {
        const sql = 'INSERT INTO atendimentos SET ?';
        return query(sql, atendimento);
    }
}

module.exports = new Atendimento();