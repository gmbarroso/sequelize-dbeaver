module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      // name: Sequelize.STRING,
      // isBetaMember: {
      //   type: Sequelize.BOOLEAN,
      //   defaultValue: false,
      //   allowNull: false
      // },
      // userId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false
      // },
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: Sequelize.STRING,
      year: Sequelize.INTEGER,
      cast: Sequelize.STRING,
      genres: Sequelize.STRING,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
}