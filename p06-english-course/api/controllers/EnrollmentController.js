const Sequelize = require('sequelize')
const { EnrollmentsServices } = require('../services')
const enrollmentsServices = new enrollmentsServices()

class EnrollmentController {
  static async pegaUmaMatricula(req, res) { 
    const { studentId, enrollmentId } = req.params;
    try {
      const enrollment = await enrollmentsServices
        .getById({id: enrollmentId, student_id: studentId});
      return res.status(200).json(enrollment);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async create(req, res) {  
    const { studentId } = req.params
    const newEnrollment = { ...req.body, estudante_id: Number(studentId) }
    try {
      const newCreatedEnrollment = await enrollmentsServices
        .create(newEnrollment);
      return res.status(200).json(newCreatedEnrollment);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req, res) {  
    const { studentId, enrollmentId } = req.params;
    const newValues = req.body;
    try {
      await enrollmentsServices
        .update(newValues, 
          { id: Number(enrollmentId), student_id: Number(studentId) })
      return res.status(200).json({ message: `id ${enrollmentId} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async delete(req, res) {  
    const { enrollmentId } = req.params;
    try {
      await enrollmentsServices.delete(Number(enrollmentId));
      return res.status(200).json({ message: `id ${enrollmentId} deletado` });

    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restores(req, res) {  
    const { enrollmentId } = req.params;
    try {
      await enrollmentsServices
        .restores(Number(enrollmentId));
      return res.status(200).json({ message: `id ${enrollmentId} restaurado`})
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

}

module.exports = EnrollmentController