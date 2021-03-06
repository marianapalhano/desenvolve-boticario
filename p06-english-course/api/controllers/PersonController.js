const db = require('../models');
const { PeopleServices } = require('../services');
const peopleServices = new PeopleServices();

class PersonController {
    static async getAll(req, res) {
        try {
            const allPeople = await peopleServices.getAll();
            return res.status(200).json(allPeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getById(req, res) {
        const { id } = req.params;
        try {
            const person = await peopleServices.getById(id);
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        const newPerson = req.body;
        try {
            const person = await peopleServices.create(newPerson);
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const newValues = req.body;
        try {
            await peopleServices.update(newValues, Number(id));
            const person = await db.People.findOne({ where: { id: Number(id) } });
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await peopleServices.delete(Number(id));
            return res.status(200).json({ message: `Registro com id ${id} apagado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getEnrollmentById(req, res) {
        const { studentId, enrollmentId } = req.params;
        try {
            const enrollment = await db.enrollments.findOne({ 
                where: {
                    id: Number(enrollmentId),
                    student_id: Number(studentId)
                } 
            });
            return res.status(200).json(enrollment);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getEnrollmentByClass(req, res) {
        const { classId } = req.params;
        try {
            const enrollments = await db.enrollments.findAndCountAll({ 
                where: {
                    class_id: Number(classId),
                    status: 'confirmado'
                },
                limit: 20,
                order: [['student_id', 'DESC']]
            });
            return res.status(200).json(enrollments);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createEnrollment(req, res) {
        const { studentId } = req.params;
        const newEnrollment = { ...req.body, student_id: Number(studentId) };
        try {
            const enrollment = await db.enrollments.create(newEnrollment);
            return res.status(200).json(enrollment);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params;
        const newValues = req.body;
        try {
            await db.enrollments.update(newValues, { 
                where: { 
                    id: Number(enrollmentId),
                    student_id: Number(studentId)
                } 
            });
            const enrollment = await db.enrollments.findOne({ where: { id: Number(enrollmentId) } });
            return res.status(200).json(enrollment);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params;
        try {
            await db.enrollments.destroy({ where: { id: Number(enrollmentId) } });
            return res.status(200).json({ message: `Registro com id ${enrollmentId} apagado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async cancelPerson(req, res) {
        const { studentId } = req.params;
        try {
            await peopleServices.cancelPersonAndEnrollments(Number(studentId));
            return res.status(200).json({ message: `Matriculas relativas ao estudante id ${studentId} canceladas` });
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PersonController;