const repo = require('../repositories/products');
const moment = require('moment');

class Product {

    list() {
        return repo.list();
    }

    getById(id) {
        return repo.getById(id);
    }

    add(product) {
        const created_at = moment().format('YYYY-MM-DD hh:mm:ss');
        const updated_at = created_at;
            return repo.add({ ...product, created_at, updated_at })
                .then(result => {
                    const id = result.insertId
                    return { ...product, id };
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

module.exports = new Product;