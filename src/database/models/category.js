export default (sequelize, DataTypes) => {
  const category = sequelize.define(
    'category',
    {
      category_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true
      },
      department_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: 'null'
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'null'
      },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        comment: 'null'
      }
    },
    {
      tableName: 'category',
      timestamps: false
    }
  );

  category.associate = (models) => {
    category.belongsToMany(models.product, {
      as: 'Products',
      through: models.product_category,
      foreignKey: 'category_id'
    });
  };

  return category;
};
