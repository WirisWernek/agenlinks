const Sequelize = require('sequelize');
const connection = require("./database");

const Link = connection.define("tb_links", {
    url: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    tipo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Link.associate = function(models) {
    Link.belongsTo(models.Usuario, {foreignKey: 'usuarioId', as: 'usuario'})
};

Link.sync({
    force: false
});


// Usuario.hasMany(Link, {
//     foreignKey: "usuarioId",
//   });
// Link.belongsTo(Usuario);

module.exports = Link;