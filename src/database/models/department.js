export default (sequelize, DataTypes) => {
  const department = sequelize.define(
    'department',
    {
      department_id: {
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
      },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        comment: 'null'
      }
    },
    {
      tableName: 'department',
      timestamps: false
    }
  );

  return department;
};
