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

  product_attribute.associate = (models) => {
    product_attribute.belongsTo(models.attribute, {
      foreignKey: 'attribute_value_id',
      targetKey: 'attribute_id',
    });

    product_attribute.belongsTo(models.product, {
      foreignKey: 'product_id',
      targetKey: 'product_id',
    });
  };


  return product_attribute;
};
