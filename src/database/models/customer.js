import bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  const customer = sequelize.define(
    'customer',
    {
      customer_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'null'
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'null',
        unique: true
      },
      password: {
        type: DataTypes.STRING(150),
        allowNull: false,
        comment: 'null'
      },
      credit_card: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'null'
      },
      address_1: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'null'
      },
      address_2: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'null'
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'null'
      },
      region: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'null'
      },
      postal_code: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'null'
      },
      country: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'null'
      },
      shipping_region_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '1',
        comment: 'null'
      },
      day_phone: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'null'
      },
      eve_phone: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'null'
      },
      mob_phone: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'null'
      }
    },
    {
      tableName: 'customer',
      timestamps: false
    }
  );

  customer.beforeCreate((user) => {
    // eslint-disable-next-line no-param-reassign
    user.password = bcrypt.hashSync(user.password, 8);
  });

  customer.prototype.checkPassword = ((password, hash) => bcrypt.compareSync(password, hash));

  // eslint-disable-next-line func-names
  customer.prototype.toJSONData = function () {
    const values = { ...this.get() };

    delete values.password;
    return values;
  };

  return customer;
};
