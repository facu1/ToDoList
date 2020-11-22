const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

connect = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', () => {
    console.log('db connected')
  });
}

module.exports = connect;