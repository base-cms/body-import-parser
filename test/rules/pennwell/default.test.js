const rule = require('../../../src/rules/pennwell/default');

describe('rules/pennwell/default', () => {
  it('should pass the original HTML body through unaltered.', async () => {
    const body = `
      <div class="foo">
        <span class="bar">Bar</span>
        <form></form>
      </div>
    `;
    const result = await rule(body);
    expect(result.html.original).to.equal(body);
  });
  it('should strip new lines and excessive whitespace.', async () => {
    const body = `
      <div>
        <span>Bar   </span>
      </div>
    `;
    const result = await rule(body);
    expect(result.html.cleaned).to.equal('<div><span>Bar</span></div>');
  });
  it('should remove <form> elements.');
  it('should remove <iframe> elements with a src containing pennnet.com.');
  it('should not convert HTML entities.');
  it('should adjust heading elements when an <h1> is present.');
  it('should not adjust heading elements when an <h1> is not present.');
  it('should remove `class` attributes.');
  it('should remove `style` attributes.');
  it('should remove `id` attributes.');
  it('should remove `data` attributes.');
  it('should extract a deck value when present.');
  it('should remove the deck elements when present.');
  it('should extract an author value when present.');
  it('should remove the author elements when present.');
});
