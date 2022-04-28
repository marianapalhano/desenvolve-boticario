const db = require('../models');
const Services = require('./Services');

class PeopleServices extends Services {
    constructor() {
        super('People');
        this.enrollments = new Services('enrollments');
    }

    async cancelPersonAndEnrollments(studentId) {
        return db.sequelize.transaction(async trans => {
            await super.update({ active: false }, studentId, { transaction: trans });
            await this.enrollments.update({ status: 'cancelado' }, { student_id: studentId }, { transaction: trans });
        });
    }
}

module.exports = PeopleServices;