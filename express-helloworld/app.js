var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');//Este es el primer cambio
});

app.get('/', function (req, res) {
  res.send('Hello Mars!\n');//new cambio
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

