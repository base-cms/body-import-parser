const app = require('./app');

const { log } = console;
const { PORT = 4008 } = process.env;

app.listen(PORT, () => log(`Service listening on http://0.0.0.0:${PORT}`));
