export default (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: 'null',
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: 'null',
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      comment: 'null',
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: 'null',
    },
    discounted_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: 'null',
    },
    image: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: 'null',
    },
    image_2: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: 'null',
    },
    thumbnail: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: 'null',
    },
    display: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0',
      comment: 'null',
    },
  }, {
    tableName: 'product',
    timestamps: false,
  });

  product.associate = (models) => {
    product.belongsToMany(models.category, {
      as: 'Category',
      through: models.product_category,
      foreignKey: 'product_id'
    });
  };

  return product;
};
