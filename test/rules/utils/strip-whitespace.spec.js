const stripWhitespace = require('../../../src/utils/strip-whitespace');

describe('utils/strip-whitespace', () => {
  it('should strip new lines and excessive whitespace around HMTL elements.', async () => {
    const body = `
      <div>
        \t\t<span>Bar   </span>
        <span>Foo  Bar</span>
        <span>Baz Bar</span>\r\n
      </div>
      <p>Hello, World</p>\t
    `;
    const result = stripWhitespace(body);
    expect(result).to.equal('<div><span>Bar   </span><span>Foo  Bar</span><span>Baz Bar</span></div><p>Hello, World</p>');
  });
  it('should return an empty string for null values.', async () => {
    expect(stripWhitespace()).to.equal('');
    expect(stripWhitespace(null)).to.equal('');
  });
});
