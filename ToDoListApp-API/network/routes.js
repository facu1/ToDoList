const item = require('../components/Item/network');

const routes = (server) => {
  server.use('/api/items', item);
}

module.exports = routes;