import Sequelize from 'sequelize';
import sequelize from '../db/postgres';

sequelize.define('song', {
  user: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  album: {
    type: Sequelize.STRING,
  },
  duration: {
    type: Sequelize['DOUBLE PRECISION'],
  },
  artist: {
    type: Sequelize.STRING,
  },
  releaseYear: {
    type: Sequelize.INTEGER,
  },
  src: {
    type: Sequelize.STRING,
  },
  picture: {
    type: Sequelize.STRING,
  },
  star: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

sequelize.define('playlist', {
  user: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
});

sequelize.define('user', {
  key: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  avatar: {
    type: Sequelize.STRING,
  },
});

sequelize.define('song_playlist', {
  user: {
    type: Sequelize.STRING,
  },
  playlistId: {
    type: Sequelize.INTEGER,
  },
  songId: {
    type: Sequelize.INTEGER,
  },
});

sequelize.sync();

export default sequelize.models;
