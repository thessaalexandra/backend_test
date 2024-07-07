const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './library.sqlite'
});

const Book = require('c:/Users/Lenovo/backend_test/models/book')(sequelize, Sequelize.DataTypes);
const Member = require('c:/Users/Lenovo/backend_test/models/member')(sequelize, Sequelize.DataTypes);

const models = {
  Book,
  Member,
  sequelize,
  Sequelize
};

module.exports = models;
