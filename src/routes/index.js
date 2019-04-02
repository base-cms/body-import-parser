const { createRoute: route } = require('./create');
const penwellDefault = require('../rules/penwell/default');

module.exports = (app) => {
  route(app, '/pennwell/default', penwellDefault);
};
