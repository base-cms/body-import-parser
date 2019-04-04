const { asyncRoute } = require('@base-cms/utils');

const paths = [];

const createRoute = (app, path, fn) => {
  paths.push(path);
  app.get(path, (req, res) => {
    res.send(`To use, POST an HTML body to ${path}`);
  });
  app.post(path, asyncRoute(async (req, res) => {
    const { body, headers } = req;
    const prefix = 'x-option-';
    const options = Object.keys(headers)
      .filter(key => key.indexOf(prefix) === 0)
      .reduce((o, key) => {
        const v = headers[key];
        const k = key.replace(prefix, '');
        return { ...o, [k]: v };
      }, {});
    const results = await fn(body, options);
    res.json(results);
  }));
};

module.exports = { createRoute, paths };
