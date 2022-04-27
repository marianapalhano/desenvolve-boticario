const db = require('../models');
const Services = require('../services/Services');
const LevelServices = new Services('levels');

class LevelController {
    static async getAll(req, res) {
        try {
            const allLevels = await LevelServices.findAll();
            return res.status(200).json(allLevels);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        const { id } = req.params;
        try {
            const level = await db.levels.findOne({ where: { id: Number(id) } });
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        const newLevel = req.body;
        try {
            const level = await db.levels.create(newLevel);
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const newValues = req.body;
        try {
            await db.levels.update(newValues, { where: { id: Number(id) } });
            const level = await db.levels.findOne({ where: { id: Number(id) } });
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await db.levels.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `Registro com id ${id} apagado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = LevelController;