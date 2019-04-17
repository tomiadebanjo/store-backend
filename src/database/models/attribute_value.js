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

  return attribute_value;
};
