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

  return attribute;
};
