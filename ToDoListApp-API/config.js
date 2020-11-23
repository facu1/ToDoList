const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  // Aclaracion importante!
  // Lo que esta a continuacin no se deberia hacer, pq se esta mostrando la base 
  // de datos donde se guarda todo lo de la app, se deberia definir en las 
  // variables de entorno de heroku, yo lo defino asi para que no  se tenga que 
  // instalar MongoDB en su computadora
  dbUrl: process.env.DB_URL || 'mongodb+srv://userQuasar:quasar@cluster0.qhync.mongodb.net/prueba1?retryWrites=true&w=majority',
  port: process.env.PORT || 5000,
  host: process.env.HOST || 'http://localhost',
};

module.exports = config;