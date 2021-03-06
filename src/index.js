const app = require('./app');

const { log } = console;
const { PORT, EXPOSED_PORT } = process.env;

app.listen(PORT, () => log(`Service listening on http://0.0.0.0:${EXPOSED_PORT}`));
