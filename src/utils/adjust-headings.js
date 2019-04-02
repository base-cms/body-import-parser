const selector = 'h1, h2, h3, h4, h5';

module.exports = ($) => {
  if ($('h1').length) {
    $(selector).each(function () {
      const tag = $(this).prop('tagName').toLowerCase();
      const [, num] = [...tag];
      const newTag = `h${Number(num) + 1}`;
      $(this).replaceWith(`<${newTag}>${$(this).html()}</${newTag}>`);
    });
  }
};
