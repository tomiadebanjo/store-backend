/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    'order_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'total_amount': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'created_on': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'shipped_on': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'status': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'comments': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'customer_id': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'auth_code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reference': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'shipping_id': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'tax_id': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'orders'
  });
};
