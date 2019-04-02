const { createRoute: route } = require('./create');
const penwellDefault = require('../rules/pennwell/default');

module.exports = (app) => {
  route(app, '/pennwell/default', penwellDefault);
};
