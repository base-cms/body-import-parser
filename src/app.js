const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { paths } = require('./routes/create');

const app = express();
app.use(bodyParser.text({
  limit: '1024kb',
  type: 'text/html',
}));

routes(app);

app.get('/', (req, res) => {
  const url = `${req.protocol}://${req.get('host')}`;
  res.json({ paths: paths.map(path => `${url}${path}`) });
});

module.exports = app;
