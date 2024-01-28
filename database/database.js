const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(process.env.BANCO, process.env.USUARIO, process.env.SENHA, {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;