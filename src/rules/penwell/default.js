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

module.exports = async (body) => {
  const html = (body || '').replace(/\s\s+/g, '');
  const $ = cheerio.load(html);

  const deck = extractDeck($);

  adjustHeadings($);

  return {
    extracted: {
      deck,
    },
    cleaned: $('body').html(),
    original: body,
  };
};
