# Agenlinks

<!-- <div align="center">
	<img width="800" src="https://i.ibb.co/NFZ4fMj/Cart-o-Digital-V2.png">
</div> -->

## 🔥 Sobre

A ideia do projeto é ser agregador de links que é integrado com o sistema agendix e gerado autiomaticamente.

Atualmente o projeto ainda não está publicado pois ainda está em construção.

## 🔨 Como executar esta aplicação?

### Padrão
Para rodar a aplicação voce deve:
- Primeiro clonar este repositório
- Navegar para a pasta `agenlinks`
- Crie um banco de dados postgres com o nome `agenlinks_db`;
- Crie seu arquivo `.env` seguindo o padrão do arquivo `env.example` configurando as variávei de ambiente de acordo com seu ambiente;
- Executar o comando `npm i` para instalar as dependências do projeto
- Executar o comando `npm run dev` para rodar a aplicação
- Abrir em seu navegador de preferência a URL `http://localhost:5000/` para acessar a aplicação
- Para exibição dos dados é necessário informar o username de um usuário. Como usuário de exemplo você pode executar o script dentro da pasta `utils` e acessar novamente o endereço `http://localhost:5000/template` onde o nome `template` é o nome do usuário de teste.

Por ser uma aplicação focada em mobile para uma melhor experiência é recomendado que você utilize o modo de design responsivo(No Chrome e Firefox pode ser acessado com as teclas `CTRL` + `SHIFT`+ `M`) e trocar para o display de um dos modelos de smartphones que seu navegador disponibilizar. 

Também é possível utilizar a extensão [Mobile Simulator](https://chrome.google.com/webstore/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk) disponível para Google Chrome e Firefox.

## 📦 Tecnologias usadas
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)