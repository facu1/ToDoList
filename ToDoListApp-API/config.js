const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  dbUrl: process.env.DB_URL || 'mongodb+srv://userQuasar:quasar@cluster0.qhync.mongodb.net/prueba1?retryWrites=true&w=majority',
  port: process.env.PORT || 5000,
  host: process.env.HOST || 'http://localhost',
};

module.exports = config;