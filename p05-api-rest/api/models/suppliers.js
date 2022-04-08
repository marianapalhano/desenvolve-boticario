const db = require('../db/connection');
const repo = require('../repositories/suppliers');

class Supplier {
    list() {
        return repo.list();
    }
}

module.exports = new Supplier;