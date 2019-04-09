const cheerio = require('cheerio');
const removeAttributes = require('../../src/utils/remove-attributes');

describe('utils/remove-attributes', () => {
  it('should remove the requested attributes.', async () => {
    const body = `
      <div>
        <h1 class="foo">Foo</h1>
        <h2 style="height: 10px;">Bar</h2>
        <h2 data-foo="bar">Bar</h2>
        <div>
          <h3 id="foo-id">Foo</h3>
          <H3>Foo</H3>
          <h4 class="foo">Foo</h4>
          <h5 data-foo="bar">Foo</h5>
          <h6>Foo</h6>
        </div>
      </div>
    `;
    const $ = cheerio.load(body);
    removeAttributes($, ['class', 'style']);
    expect($('[class]').length).to.equal(0, 'Number of `[class]` elements');
    expect($('[id]').length).to.equal(1, 'Number of `[id]` elements');
    expect($('[style]').length).to.equal(0, 'Number of `[style]` elements');
    expect($('[data-foo]').length).to.equal(2, 'Number of `[data-foo]` elements');
  });
  it('should ensure that the attributes arg is an array and leave attributes untouched.', async () => {
    const body = `
      <div>
        <h1 class="foo">Foo</h1>
        <h2 style="height: 10px;">Bar</h2>
      </div>
    `;
    const $ = cheerio.load(body);
    removeAttributes($);
    expect($('[class]').length).to.equal(1, 'Number of `[class]` elements');
    expect($('[style]').length).to.equal(1, 'Number of `[style]` elements');
  });
});
