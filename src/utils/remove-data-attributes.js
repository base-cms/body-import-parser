module.exports = ($) => {
  $('*').each(function () {
    const { attribs } = $(this)[0];
    Object.keys(attribs).forEach((attr) => {
      if (/^data-/i.test(attr)) {
        $(this).removeAttr(attr);
      }
    });
  });
};
