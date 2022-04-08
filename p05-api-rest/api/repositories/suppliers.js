const query = require('../db/queries');

class Supplier {
    // add(atendimento) {
    //     const sql = 'INSERT INTO suppliers SET ?';
    //     return query(sql, atendimento);
    // }

    list() {
        const sql = 'SELECT * FROM suppliers';
        return query(sql);
    }

    // getById(id) {
    //     const sql = `SELECT * FROM atendimentos WHERE id =${id}`;
    //     return query(sql);
    // }

    // edit(id, values) {
    //     const sql = 'UPDATE atendimentos SET ? WHERE id = ?';
    //     return query(sql, [values, id]);
    // }

    // delete(id) {
    //     const sql = 'DELETE FROM atendimentos WHERE id = ?';
    //     return query(sql, id);
    // }
}

module.exports = new Supplier();