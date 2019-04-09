const cheerio = require('cheerio');
const stripWhitespace = require('./strip-whitespace');

const removeEmpty = ($, $el) => {
  if ($el.children().length) {
    $el.children().each(function () {
      removeEmpty($, $(this));
    });
    $el.children(':empty').remove();
  }
};

module.exports = (html) => {
  const cleaned = stripWhitespace(html);
  const $ = cheerio.load(cleaned);
  removeEmpty($, $.root());
  return $('body').html();
};
