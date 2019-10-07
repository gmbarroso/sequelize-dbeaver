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

sequelize.authenticate().then(() => {
  console.log("Success!");
  // Crating model
  const Posts = sequelize.define('posts', {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true
  });

  Posts.sync({force: true}).then(function () {
    console.log('lalalalal')
    return Posts.create({
      title: 'Getting Started with PostgreSQL and Sequelize',
      content: 'Hello there'
    });
  });
}).catch((err) => {
  console.log(err);
});