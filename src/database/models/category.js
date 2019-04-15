/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    'category_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'department_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'name': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'category'
  });
};
