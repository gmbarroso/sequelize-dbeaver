module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define('Movie', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: Sequelize.STRING,
    year: Sequelize.INTEGER,
    cast: Sequelize.STRING,
    genres: Sequelize.STRING,
  });

  return Movie;
}