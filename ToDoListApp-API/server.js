const express = require('express');
const app = express();
const server = require('http').Server(app);
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

db(config.dbUrl);

app.use(cors());
app.use(bodyParser.json());
router(app);

// app.use(express.static(__dirname + '/public/'));
// app.use(express.static(__dirname + '/../client/dist/spa/'));

// app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// app.get(/.*/, (req, res) => res.sendFile(__dirname + '/../client/dist/spa/index.html'));

server.listen(config.port, () => {
  console.log(`server started on host ${config.host} on port ${config.port}`)
});