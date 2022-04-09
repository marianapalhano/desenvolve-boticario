const query = require('../db/queries');

class Supplier {
    add(supplier) {
        const sql = 'INSERT INTO suppliers SET ?';
        return query(sql, supplier);
    }

    list() {
        const sql = 'SELECT * FROM suppliers';
        return query(sql);
    }

    getById(id) {
        const sql = `SELECT * FROM suppliers WHERE id =${id}`;
        return query(sql);
    }

    edit(id, values) {
        const sql = 'UPDATE suppliers SET ? WHERE id = ?';
        return query(sql, [values, id]);
    }

    delete(id) {
        const sql = 'DELETE FROM suppliers WHERE id = ?';
        return query(sql, id);
    }
}

module.exports = new Supplier();