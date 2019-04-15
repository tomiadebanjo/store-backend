/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('review', {
    'review_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'customer_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'product_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'review': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'rating': {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      comment: "null"
    },
    'created_on': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'review'
  });
};
