const db = require('../models');

class PersonController {
    static async listAll(req, res) {
        try {
            const allPeople = await db.People.findAll();
            return res.status(200).json(allPeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PersonController;