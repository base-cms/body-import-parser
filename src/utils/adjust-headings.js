const cheerio = require('cheerio');

const selector = 'h1, h2, h3, h4, h5';

module.exports = ($) => {
  if ($('h1').length) {
    $(selector).each(function () {
      const tag = $(this).prop('tagName').toLowerCase();
      const [, num] = [...tag];
      const newTag = `h${Number(num) + 1}`;
      const { attribs } = $(this)[0];

      const $new = cheerio.load(`<span><${newTag}>${$(this).html()}</${newTag}></span>`)('span');
      Object.keys(attribs).forEach(key => $new.children(newTag).attr(key, attribs[key]));

      $(this).replaceWith($new.html());
    });
  }
};
