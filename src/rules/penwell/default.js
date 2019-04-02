const cheerio = require('cheerio');
const adjustHeadings = require('../../utils/adjust-headings');

const extractDeck = ($) => {
  const className = '.paraStyle_headline_deck';
  const element = $(className);
  if (!element.length) return null;
  const deck = (element.text() || '').trim() || null;
  element.replaceWith('');
  return deck;
};

const extractAuthor = ($) => {
  const byline = ($('.paraStyle_byline').text() || '').trim();
  $('.paraStyle_byline').replaceWith('');

  return {
    name: byline.replace(/^by/i, '').trim() || null,
  };
};

module.exports = async (body) => {
  const html = (body || '').replace(/\s\s+/g, '');
  const $ = cheerio.load(html);

  const deck = extractDeck($);
  const author = extractAuthor($);

  adjustHeadings($);

  return {
    extracted: {
      deck,
      author,
    },
    cleaned: $('body').html(),
    original: body,
  };
};
