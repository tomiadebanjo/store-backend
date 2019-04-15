/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tax', {
    'tax_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'tax_type': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'tax_percentage': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'tax'
  });
};
