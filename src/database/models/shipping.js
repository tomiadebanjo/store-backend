/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shipping', {
    'shipping_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'shipping_type': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'shipping_cost': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: "null"
    },
    'shipping_region_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'shipping'
  });
};
