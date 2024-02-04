const Sequelize = require("sequelize");
const connection = require("./database");
const Link = require("./Link");

const Usuario = connection.define("tb_usuarios", {
  username: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  nome: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  foto: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  subtitulo: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

Usuario.associate = function(models) {
    Usuario.hasMany(models.Link, {as: 'links'})
  };

Usuario.sync({
  force: false,
});

module.exports = Usuario;
