export default (sequelize, DataTypes) => {
  const order_detail = sequelize.define(
    'order_detail',
    {
      item_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true
      },
      order_id: {
        type: DataTypes.INTEGER(11),
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
      product_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'null'
      },
      quantity: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: 'null'
      },
      unit_cost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        comment: 'null'
      }
    },
    {
      tableName: 'order_detail',
      timestamps: false
    }
  );

  return order_detail;
};
