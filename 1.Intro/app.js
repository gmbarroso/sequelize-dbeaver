const Sequelize = require('sequelize');
/////////////////////////// 'banco de dados', 'username', 'password'
const sequelize = new Sequelize('postgres', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

// import model
const defineUser = require('./models/user')

const user = defineUser(sequelize, Sequelize)

sequelize.authenticate()
  // .tap??
  .then(() => user.sync({force: true}))
  .then(() => user.create({
    name: 'Jorel',
    email: 'irmao@jorel.com',
    password: 'anacatarina',
  }))
  .then((result) => console.log('justiça', result))
  .catch((err) => {
    console.log(err)
  })