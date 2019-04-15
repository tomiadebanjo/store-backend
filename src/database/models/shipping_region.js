/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shipping_region', {
    'shipping_region_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'shipping_region': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'shipping_region'
  });
};
