const query = require('../db/queries');

class Product {
    add(product) {
        const sql = 'INSERT INTO products SET ?';
        return query(sql, product);
    }

    list() {
        const sql = 'SELECT * FROM products';
        return query(sql);
    }

    getById(id) {
        const sql = `SELECT * FROM products WHERE id =${id}`;
        return query(sql);
    }

    edit(id, values) {
        const sql = 'UPDATE products SET ? WHERE id = ?';
        return query(sql, [values, id]);
    }

    delete(id) {
        const sql = 'DELETE FROM products WHERE id = ?';
        return query(sql, id);
    }
}

module.exports = new Product();