const db = require('../models');
const Sequelize = require('sequelize');
const { ClassesServices } = require('../services');
const Op = Sequelize.Op;
const classesService = new ClassesServices();

class ClassController {
    static async getAll(req, res) {
        const { started_at, final_date } = req.query;
        const where = {};
        started_at || final_date ? where.started_at = {} : null;
        started_at ? where.started_at[Op.gte] = started_at : null;
        final_date ? where.started_at[Op.lte] = final_date : null;
        try {
            const allClasses = await classesService.getAll(where);
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