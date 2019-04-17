export default (sequelize, DataTypes) => {
  const product_attribute = sequelize.define(
    'product_attribute',
    {
      product_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null'
      },
      attribute_value_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null'
      }
    },
    {
      timestamps: false,
      tableName: 'product_attribute'
    }
  );

  return product_attribute;
};
