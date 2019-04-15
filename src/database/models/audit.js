/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit', {
    'audit_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'order_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'created_on': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'message': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'code': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'audit'
  });
};
