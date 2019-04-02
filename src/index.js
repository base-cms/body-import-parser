const app = require('./app');

const { log } = console;
const { PORT, EXPOSED_PORT } = process.env;

app.get('/', (req, res) => {
  res.json({ ping: 'pong' });
});

app.listen(PORT, () => log(`Service listening on http://0.0.0.0:${EXPOSED_PORT}`));
