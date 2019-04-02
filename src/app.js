const express = require('express');
const routes = require('./routes');
const { paths } = require('./routes/create');

const app = express();

routes(app);

app.get('/', (req, res) => {
  const url = `${req.protocol}://${req.get('host')}`;
  res.json({ paths: paths.map(path => `${url}${path}`) });
});

module.exports = app;
