export default (sequelize, DataTypes) => {
  const attribute = sequelize.define('attribute', {
    attribute_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: 'null',
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: 'null'
    }
  }, {
    tableName: 'attribute',
    timestamps: false,
  });

  attribute.associate = (models) => {
    attribute.belongsToMany(models.product, {
      as: 'Products',
      through: models.product_attribute,
      foreignKey: 'attribute_value_id'
    });

    attribute.hasMany(models.attribute_value, {
      foreignKey: 'attribute_id',
      sourceKey: 'attribute_id'
    });
  };

  return attribute;
};
