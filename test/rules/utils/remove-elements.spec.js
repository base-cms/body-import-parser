const cheerio = require('cheerio');
const removeElements = require('../../../src/utils/remove-elements');

describe('utils/remove-elements', () => {
  it('should remove elements from the HTML.', async () => {
    const body = `
      <div>
        <h1 class="foo">Foo</h1>
        <h2>Bar</h2>
        <h2 data-foo="bar">Bar</h2>
        <div>
          <h3>Foo</h3>
          <H3>Foo</H3>
          <h4 class="foo">Foo</h4>
          <h5 data-foo="bar">Foo</h5>
          <h6>Foo</h6>
        </div>
      </div>
    `;
    const $ = cheerio.load(body);
    removeElements($, '.foo, h4');
    expect($('.foo').length).to.equal(0, 'Number of `.foo` elements');
    expect($('h4').length).to.equal(0, 'Number of <h4> elements');
  });
});
