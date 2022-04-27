const db = require('../models');

class Services {
    constructor(modelName) {
        this.modelName = modelName;
    }

    async getAll() {
        return db[this.modelName].findAll();
    }

    async getById() {
        return db[this.modelName].findOne({ where: { id: Number(id) } });
    }

    async update(newValues, id, transaction) {
        return db[this.modelName].update(newValues, { where: { id: id }}, transaction);
    }

    async update(newValues, where, id, transaction) {
        return db[this.modelName].update(newValues, { where: { ...where }}, transaction);
    }
}

module.exports = Services;