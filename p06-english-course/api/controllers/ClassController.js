const db = require('../models');

class ClassController {
    static async getAll(req, res) {
        try {
            const allClasses = await db.classes.findAll();
            return res.status(200).json(allClasses);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        const { id } = req.params;
        try {
            const class_ = await db.classes.findOne({ where: { id: Number(id) } });
            return res.status(200).json(class_);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        const newClass = req.body;
        try {
            const class_ = await db.classes.create(newClass);
            return res.status(200).json(class_);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const newValues = req.body;
        try {
            await db.classes.update(newValues, { where: { id: Number(id) } });
            const class_ = await db.classes.findOne({ where: { id: Number(id) } });
            return res.status(200).json(class_);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await db.classes.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `Registro com id ${id} apagado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ClassController;