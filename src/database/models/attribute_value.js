export default (sequelize, DataTypes) => {
  const attribute_value = sequelize.define('attribute_value', {
    attribute_value_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: 'null',
      autoIncrement: true
    },
    attribute_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: 'null'
    },
    value: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: 'null'
    }
  }, {
    tableName: 'attribute_value',
    timestamps: false,
  });

  attribute_value.associate = (models) => {
    attribute_value.belongsTo(models.attribute, {
      foreignKey: 'attribute_id',
      targetKey: 'attribute_id'
    });

    attribute_value.belongsToMany(models.product, {
      as: 'Products',
      through: models.product_attribute,
      foreignKey: 'attribute_value_id'
    });
  };

  return attribute_value;
};
