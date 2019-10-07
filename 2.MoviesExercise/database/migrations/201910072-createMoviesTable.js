module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.addColumn('Movies', 'createdAt', {
            type: Sequelize.DATE,
        }),
        queryInterface.addColumn('Movies', 'updatedAt', {
            type: Sequelize.DATE,
        })
    ])
  },

  down: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.removeColumn('Movies', 'createdAt'),
          queryInterface.removeColumn('Movies', 'updatedAt')
      ])
  }
}