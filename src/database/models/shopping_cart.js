export default (sequelize, DataTypes) => {
  const shopping_cart = sequelize.define('shopping_cart', {
    item_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: 'null',
      autoIncrement: true
    },
    cart_id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      comment: 'null'
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: 'null'
    },
    attributes: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      comment: 'null'
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: 'null'
    },
    buy_now: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      comment: 'null'
    },
    added_on: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'null'
    }
  }, {
    tableName: 'shopping_cart',
    timestamps: false
  });

  shopping_cart.associate = (models) => {
    shopping_cart.belongsTo(models.product, {
      foreignKey: 'product_id',
      targetKey: 'product_id'
    });
  }
  return shopping_cart;
};
