const db = require('../models');

class Services {
    constructor(modelName) {
        this.modelName = modelName;
    }

    async getAll() {
        return db[this.modelName].findAll();
    }
}

module.exports = Services;