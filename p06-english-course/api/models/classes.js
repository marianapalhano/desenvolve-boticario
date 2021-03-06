'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      classes.hasMany(models.enrollments, {
        foreignKey: 'class_id'
      });
      classes.belongsTo(models.People, {
        foreignKey: 'teacher_id'
      });
      classes.belongsTo(models.levels, {
        foreignKey: 'level_id'
      });
    }
  }
  classes.init({
    started_at: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'classes',
  });
  return classes;
};