const db = require('../db/connection');
const repo = require('../repositories/suppliers');
const moment = require('moment');

class Supplier {

    list() {
        return repo.list();
    }

    getById(id) {
        return repo.getById(id);
    }

    add(supplier) {
        const created_at = moment().format('YYYY-MM-DD hh:mm:ss');
        const updated_at = created_at;
            return repo.add({ ...supplier, created_at, updated_at })
                .then(result => {
                    const id = result.insertId
                    return { ...supplier, id };
                });
    }

    edit(id, values) {
        values.updated_at = moment().format('YYYY-MM-DD hh:mm:ss');
        return repo.edit(id, values);
    }

    delete(id) {
        return repo.delete(id);
    }
}

module.exports = new Supplier;