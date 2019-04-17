export default (sequelize, DataTypes) => {
  const product_category = sequelize.define('product_category', {
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: 'null'
    },
    category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: 'null'
    }
  }, {
    tableName: 'product_category',
    timestamps: false
  });

  product_category.associate = (models) => {
    product_category.belongsTo(models.category, {
      foreignKey: 'category_id',
      targetKey: 'category_id',
    });

    product_category.belongsTo(models.product, {
      foreignKey: 'product_id',
      targetKey: 'product_id',
    });
  };

  return product_category;
};
