module.exports = ($, selector) => {
  $(selector).each(function () {
    $(this).replaceWith('');
  });
};
