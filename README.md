<h1 align="center">Tech4Weather - API </h1>


</div>

## 📕 Índice

- [📋 Sobre](#Sobre)
- [🕹 Tecnologias](#Tecnologias)
- [🧑🏽‍💻 Iniciando o projeto](#Iniciando)
- [📝 Licença](#Licença)


<hr>

<!-- About -->

# Sobre

<p align="left"> API criada em Nodejs com Express, utilizando PostgreSQL para persistência e Sequelize como ORM.
 A ideia da API é gerenciar fluxo de buscas por cidades e auxiliar na criação de um histórico das cidades mais pesquisadas no servidor</p>

<hr>

<!-- TECHNOLOGIES -->

# Tecnologias

- [PostgreSQL](https://www.postgresql.org/)
- [Node JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [Eslint](https://eslint.org/)
- [Nodemon](https://www.npmjs.com/package/nodemon)


<hr>

<!-- TECHNOLOGIES -->

# Iniciando

##### Pré-requisitos

- npm

  ```sh
  npm install npm -g
  ```

- sequelize-cli

  ```sh
  npm install sequelize-cli -g
  ```

<hr>

### Instalação e uso

```bash
# Abra um terminal e copie este repositório com o comando
$ git clone https://github.com/lekofox/tech4weather-api.git
# ou use a opção de download.

# Entre na pasta com 
$ cd tech4weather-api

# Instale as dependências
$ npm install ou yarn

# Caso você prefira rodar localmente, precisa ter o PosgreSQL e mudar as credenciais no config/database.js !! (Não é recomendado, dado que a lógica de requisição do front-end foi feita com base no deploy)
    
# Caso esteja rodando localmente, rode as migrations
$ npx sequelize db:migrate 
# Rode a aplicação
$ npm start
```





<hr>



# Licença

Distribuído sob a licença MIT.
<!-- CONTACT -->

