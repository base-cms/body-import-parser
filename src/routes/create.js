const { asyncRoute } = require('@base-cms/utils');

const paths = [];
exports.paths = paths;

const createRoute = (app, path, fn) => {
  paths.push(path);
  app.get(path, (req, res) => {
    res.send(`To use, POST an HTML body to ${path}`);
  });
  app.post(path, asyncRoute(async (req, res) => {
    const { body } = req;
    const results = await fn(body);
    return res.json(results);
  }));
};

module.exports = { createRoute, paths };
