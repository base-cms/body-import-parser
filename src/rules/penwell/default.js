const cheerio = require('cheerio');
const adjustHeadings = require('../../utils/adjust-headings');

module.exports = async (body) => {
  const html = (body || '').replace(/\s\s+/g, '');
  const $ = cheerio.load(html);

  adjustHeadings($);

  return {
    cleaned: $('body').html(),
    original: body,
  };
};
