const express = require('express');
const bodyparser = require('body-parser');
const connection = require('./database/database');
const Usuario = require('./database/Usuario');
const Link = require('./database/Link');
require('dotenv').config();
const app = express();

connection
	.authenticate()
	.then(() => {
		console.log('Conexão realizada com sucesso');
	})
	.catch((msgErro) => {
		console.log(msgErro);
	});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(
	bodyparser.urlencoded({
		extended: false,
	})
);

app.use(bodyparser.json());

app.get('/:username', (req, res) => {
	let username = req.params.username.toLocaleLowerCase();

	Usuario.findOne({ where: { username: username } }).then((usuario) => {
		if (usuario != undefined) {
			Link.findAll({ where: { usuarioId: usuario.id }, order: [['tipo', 'ASC']] }).then(
				(links) => {
					let user = {
						username: usuario.nome,
						descricao: usuario.descricao,
						foto: usuario.foto,
						subtitulo: usuario.subtitulo,
						links: links,
					};
					res.render('index', { user: user });
				}
			);
		} else {
			res.render('user-not-found', { username: username });
		}
	});
});

app.listen(5000, () => {
	console.log('App rodando');
});
