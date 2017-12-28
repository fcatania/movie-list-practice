const Sequelize = require('sequelize');
const sequelize = new Sequelize('moviedb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Movie  = sequelize.define('movie', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: Sequelize.STRING,
  desc: Sequelize.TEXT,
  watched: Sequelize.BOOLEAN,
  vote_average: Sequelize.FLOAT,
  release_date: Sequelize.DATE
});

sequelize.sync();

exports.Movie = Movie;