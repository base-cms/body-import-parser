const cheerio = require('cheerio');

const cleanElementText = ($, $el) => {
  const contents = $el.contents()[0];

  if (contents && contents.type === 'text') {
    const { data = '' } = contents;
    const cleaned = data.replace(/\s\s+/g, ' ').trim();
    contents.data = cleaned;
  }
  if ($el.children().length) {
    $el.children().each(function () {
      cleanElementText($, $(this));
    });
  }
};

module.exports = (html) => {
  const str = (html || '')
    .replace(/[\r\n\f\v\t\b\\]/g, ' ')
    .trim()
    .replace(/>\s+</g, '><')
    .replace(/\s+%{\[/g, '%{[')
    .replace(/\]}%\s+/g, ']}%');
  const $ = cheerio.load(str, { decodeEntities: false });
  cleanElementText($, $('body'));
  return $('body').html();
};
