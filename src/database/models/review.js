export default (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    review_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: 'null',
      autoIncrement: true
    },
    customer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: 'null'
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: 'null'
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'null'
    },
    rating: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      comment: 'null'
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'null'
    }
  }, {
    tableName: 'review',
    timestamps: false
  });

  return review;
};
