const db = require('../models');

class Services {
    constructor(modelName) {
        this.modelName = modelName;
    }

    async getAll(where = {}) {
        return db[this.modelName].findAll({ where: { ...where } });
    }

    async getById(where = {}) {
        return db[this.modelName].findOne({ where: { ...where } });
    }

    async update(newValues, id, transaction) {
        return db[this.modelName].update(newValues, { where: { id: id }}, transaction);
    }

    async update(newValues, where, id, transaction) {
        return db[this.modelName].update(newValues, { where: { ...where }}, transaction);
    }

    async create(data) {
        return db[this.modelName].create(data);
    }
}

module.exports = Services;