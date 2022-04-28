const db = require('../models');
const Services = require('../services/Services');
const levelsServices = new Services('levels');

class LevelController {
    static async getAll(req, res) {
        try {
            const allLevels = await levelsServices.findAll();
            return res.status(200).json(allLevels);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        const { id } = req.params;
        try {
            const level = await levelsServices.getById({ id });
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        const newLevel = req.body;
        try {
            const level = await levelsServices.create(newLevel);
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const newValues = req.body;
        try {
            await levelsServices.update(newValues, id);
            const level = await db.levels.findOne({ where: { id: Number(id) } });
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await levelsServices.delete(id);
            return res.status(200).json({ message: `Registro com id ${id} apagado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = LevelController;