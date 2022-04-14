const db = require('../models');

class PersonController {
    static async getAll(req, res) {
        try {
            const allPeople = await db.People.findAll();
            return res.status(200).json(allPeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        const { id } = req.params;
        try {
            const person = await db.People.findOne({ where: { id: Number(id) } });
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        const newPerson = req.body;
        try {
            const person = await db.People.create(newPerson);
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const newValues = req.body;
        try {
            await db.People.update(newValues, { where: { id: Number(id) } });
            const person = await db.People.findOne({ where: { id: Number(id) } });
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await db.People.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `Registro com id ${id} apagado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PersonController;