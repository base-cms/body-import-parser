const cheerio = require('cheerio');
const removeDataAttributes = require('../../src/utils/remove-data-attributes');

describe('utils/remove-data-attributes', () => {
  it('should remove data attributes.', async () => {
    const body = `
      <div id="foo">
        <span data-id="bar" data-foo="bar">
          <a data-id="foo"></a>
        </span>
        <span class="foo" data-class="bar"></span>
      </div>
    `;
    const $ = cheerio.load(body);
    removeDataAttributes($);
    expect($('[class]').length).to.equal(1, 'Number of `[class]` elements');
    expect($('[id]').length).to.equal(1, 'Number of `[id]` elements');
    expect($('[data-foo]').length).to.equal(0, 'Number of `[data-foo]` elements');
    expect($('[data-id]').length).to.equal(0, 'Number of `[data-id]` elements');
    expect($('[data-class]').length).to.equal(0, 'Number of `[data-class]` elements');
  });
});
