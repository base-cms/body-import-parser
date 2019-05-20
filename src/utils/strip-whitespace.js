module.exports = (html) => {
  const str = (html || '')
    .replace(/[\r\n\f\v\t\b\\]/g, '  ')
    .replace(/&nbsp;/g, ' ')
    .trim()
    .replace(/>\s+</g, '><')
    .replace(/\s+%{\[/g, '%{[')
    .replace(/\]}%\s+/g, ']}%')
    .replace(/\s\s+/g, ' ');
  return str;
};
