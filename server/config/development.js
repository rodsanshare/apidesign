require('dotenv/config');

module.exports = {
  // enabled logging for development
  logging: true,
  seed: true,
  db: {
    url: process.env.db
  }
};
