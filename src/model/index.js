const db = require('../database')

const self = {};

self.findUser = async () => {
  const ret = await db.raw('SELECT * FROM user');
  return ret[0]
}

module.exports = self;

