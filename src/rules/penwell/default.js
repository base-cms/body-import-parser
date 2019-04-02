const cheerio = require('cheerio');

module.exports = async (body) => {
  const html = (body || '').replace(/\s\s+/g, '');
  const $ = cheerio.load(html);

  return {
    cleaned: $('body').html(),
    original: body,
  };
};
