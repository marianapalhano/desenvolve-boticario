'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      People.hasMany(models.classes, {
        foreignKey: 'teacher_id'
      });
      People.hasMany(models.enrollments, {
        foreignKey: 'student_id'
      });
    }
  }
  People.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        validatesName: function(name) {
          if (name.length < 3) throw new Error('O campo nome deve ter 3 ou mais caracteres')
      }
      }
    },
    active: DataTypes.BOOLEAN,
    email: { 
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'E-mail inválido'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};