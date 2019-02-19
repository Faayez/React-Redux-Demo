const express = require('express'),
  app = express(),
  path = require('path'),
  http = require('http'),
  server = http.createServer(app),
  bodyParser = require('body-parser'),
  compression = require('compression');


app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

app.use(bodyParser.json());

app.use(compression({
  level: 9
}));


app.use(express.static(path.resolve('build')));

app.get(/^((?!\/(api|admin|administrator)).)*$/, (req, res) => {
  res.sendFile(path.resolve('build/index.html'));
});

/*Listen on Server Port*/
server.listen(4000, () => {
  console.log('listening on', server.address().port);
});