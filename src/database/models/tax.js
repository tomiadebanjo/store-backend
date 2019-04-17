export default (sequelize, DataTypes) => {
  const tax = sequelize.define('tax', {
    tax_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: 'null',
      autoIncrement: true
    },
    tax_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: 'null'
    },
    tax_percentage: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: 'null'
    }
  }, {
    tableName: 'tax',
    timestamps: false
  });

  return tax;
};
