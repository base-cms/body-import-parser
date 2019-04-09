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
  it('should strip new lines and excessive whitespace around HMTL elements.', async () => {
    const body = `
      <div>
        \t\t<span>Bar   </span>
        <span>Foo  Bar</span>
        <span>Baz Bar</span>\r\n
      </div>
      <p>Hello, World</p>\t
    `;
    const result = await rule(body);
    expect(result.html.cleaned).to.equal('<div><span>Bar   </span><span>Foo  Bar</span><span>Baz Bar</span></div><p>Hello, World</p>');
  });
  it('should remove <form> elements.', async () => {
    const body = `
      <div>
        <form>
          <input name="foo">
          <p>Bar</p>
        </form>
      </div>
      <p>Foo</p>
    `;
    const result = await rule(body);
    expect(result.html.cleaned).to.equal('<div></div><p>Foo</p>');
  });
  it('should remove <iframe> elements with a src containing pennnet.com.', async () => {
    const body = `
      <div>
        <iframe width="95%" height="40" frameborder="0" scrolling="no" src="https://buyersguide.mae.pennnet.com/Home/SearchBar"></iframe>
      </div>
      <iframe src="https://www.youtube.com"></iframe>
      <p>Foo</p>
    `;
    const result = await rule(body);
    expect(result.html.cleaned).to.equal('<div></div><iframe src="https://www.youtube.com"></iframe><p>Foo</p>');
  });
  it('should not convert HTML entities.', async () => {
    const body = `
      <div>
        <p>X > Y</p>
        <p>&amp;</p>
        %{[ data-embed-type="image" data-embed-id="5c9cebaedad15fb329dd7489" data-embed-element="span" data-embed-size="320w" contenteditable="false" data-embed-align="center" ]}%
      </div>
    `;
    const result = await rule(body);
    expect(result.html.cleaned).to.equal('<div><p>X > Y</p><p>&</p>%{[ data-embed-type="image" data-embed-id="5c9cebaedad15fb329dd7489" data-embed-element="span" data-embed-size="320w" contenteditable="false" data-embed-align="center" ]}%</div>');
  });
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
