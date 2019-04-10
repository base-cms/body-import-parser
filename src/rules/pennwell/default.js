const cheerio = require('cheerio');
const adjustHeadings = require('../../utils/adjust-headings');
const removeElements = require('../../utils/remove-elements');
const stripWhitespace = require('../../utils/strip-whitespace');
const removeAttributes = require('../../utils/remove-attributes');
const removeDataAttributes = require('../../utils/remove-data-attributes');

const removeAttrs = ($) => {
  // Remove class, id, and style attributes.
  removeAttributes($, ['class', 'id', 'style']);
  // Remove all data attributes.
  removeDataAttributes($);
};

const loadHTML = html => cheerio.load(html, { decodeEntities: false });

// const cleanTextValue = v => (v || '').replace(/\s+/g, ' ').trim();

// const extractDeck = ($) => {
//   const className = '.paraStyle_headline_deck';
//   const element = $(className);
//   if (!element.length) return null;
//   const deck = cleanTextValue(element.text()) || null;
//   element.replaceWith('');
//   return deck;
// };

// const cleanBio = (bio) => {
//   if (!bio) return null;
//   const $ = loadHTML(bio);
//   removeAttrs($);
//   return $('body').html();
// };

// const extractAuthor = ($) => {
//   const bylineClass = '.paraStyle_byline';
//   const bioClass = '.paraStyle_body_bio';

//   const name = cleanTextValue($(bylineClass).text()).replace(/^by/i, '').trim();

//   let image = null;
//   let bio = '';

//   $(bioClass).each(function () {
//     const imgElement = $(this).children('img');
//     if (imgElement.length) {
//       image = imgElement.attr('src');
//     } else {
//       bio = `${bio}<p>${$(this).html()}</p>`;
//     }
//   });

//   $(bylineClass).replaceWith('');
//   $(bioClass).replaceWith('');
//   return {
//     name: name || null,
//     image: image || null,
//     bio: cleanBio(bio),
//   };
// };

module.exports = async (body) => {
  const html = stripWhitespace(body);
  const $ = loadHTML(html);

  // const deck = extractDeck($);
  // const author = extractAuthor($);

  adjustHeadings($);

  // Remove form elements.
  removeElements($, 'form, style');

  // Remove buyer's guide iframe search embeds.
  removeElements($, 'iframe[src*="pennnet.com"]');

  // Remove attributes.
  removeAttrs($);

  return {
    extracted: {},
    html: {
      cleaned: $('body').html(),
      original: body,
    },
  };
};
