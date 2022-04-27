const db = require('../models');
const Services = require('./Services');

class PeopleServices extends Services {
    constructor() {
        super('People');
        this.enrollments = new Services('enrollments');
    }

    async cancelPersonAndEnrollments(studentId) {
        return db.sequelize.transaction(async trans => {
            
        })
    }
}

module.exports = PeopleServices;