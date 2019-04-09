module.exports = html => (html || '').replace(/[\r\n\f\v\t\b\\]/g, '').trim().replace(/>\s+</g, '><');
