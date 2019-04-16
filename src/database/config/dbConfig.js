require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'turin',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'turin_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: 'root',
    database: 'turin',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
