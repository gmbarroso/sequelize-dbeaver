module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
  });

  return User;
}