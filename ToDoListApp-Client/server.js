const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/spa/'));

app.get(/.*/, (req, res) => res.sendFile(__dirname + '/dist/spa/index.html'));

app.listen(process.env.PORT, () => {
  console.log(`server started`)
});