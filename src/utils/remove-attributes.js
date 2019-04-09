const { isArray } = Array;

module.exports = ($, attributes) => {
  const attrs = isArray(attributes) ? attributes : [];
  attrs.forEach((attr) => {
    $(`[${attr}]`).each(function () {
      $(this).removeAttr(attr);
    });
  });
};
