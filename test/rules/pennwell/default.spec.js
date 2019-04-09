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
  it('should adjust heading elements when an <h1> is present.', async () => {
    const body = `
      <div>
        <h1>Foo</h1>
        <h2>Bar</h2>
        <h2>Bar</h2>
        <div>
          <h3>Foo</h3>
          <h3>Foo</h3>
          <h4>Foo</h4>
          <h5>Foo</h5>
          <h6>Foo</h6>
        </div>
      </div>
    `;
    const result = await rule(body);
    expect(result.html.cleaned).to.equal('<div><h2>Foo</h2><h3>Bar</h3><h3>Bar</h3><div><h4>Foo</h4><h4>Foo</h4><h5>Foo</h5><h6>Foo</h6><h6>Foo</h6></div></div>');
  });
  it('should not adjust heading elements when an <h1> is not present.', async () => {
    const body = `
      <div>
        <h2>Foo</h2>
        <h2>Bar</h2>
        <h2>Bar</h2>
        <div>
          <h3>Foo</h3>
          <h3>Foo</h3>
          <h4>Foo</h4>
          <h5>Foo</h5>
          <h6>Foo</h6>
        </div>
      </div>
    `;
    const result = await rule(body);
    expect(result.html.cleaned).to.equal('<div><h2>Foo</h2><h2>Bar</h2><h2>Bar</h2><div><h3>Foo</h3><h3>Foo</h3><h4>Foo</h4><h5>Foo</h5><h6>Foo</h6></div></div>');
  });
  it('should remove `class` attributes.', async () => {
    const body = `
      <div class="foo">
        <span class="bar">Bar</span>
      </div>
    `;
    const result = await rule(body);
    expect(result.html.cleaned).to.equal('<div><span>Bar</span></div>');
  });
  it('should remove `style` attributes.', async () => {
    const body = `
      <div style="">
        <span style="height: 10px;">Bar</span>
      </div>
    `;
    const result = await rule(body);
    expect(result.html.cleaned).to.equal('<div><span>Bar</span></div>');
  });
  it('should remove `id` attributes.', async () => {
    const body = `
      <div id="">
        <span id="foo">Bar</span>
      </div>
    `;
    const result = await rule(body);
    expect(result.html.cleaned).to.equal('<div><span>Bar</span></div>');
  });
  it('should remove `data` attributes.', async () => {
    const body = `
      <div data-id="">
        <span data-foo="foo">Bar</span>
      </div>
    `;
    const result = await rule(body);
    expect(result.html.cleaned).to.equal('<div><span>Bar</span></div>');
  });
  it('should extract a deck value when present.');
  it('should remove the deck elements when present.');
  it('should extract an author value when present.');
  it('should remove the author elements when present.');
});
