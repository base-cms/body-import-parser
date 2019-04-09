const removeEmptyElements = require('../../src/utils/remove-empty-elements');

describe('utils/remove-empty-elements', () => {
  it('should remove empty elements (deeply) from the HTML.', async () => {
    const body = `
      <div class="foo">
        <span>Foo
        Bar</span>
        <div>
          <p>

          </p>
        </div>
        <span>Foo Baz</span>
        <div>
          <span>
            <p>Bar</p>
            <ul>
              <li>
              </li>
            </ul>
          </span>
        </div>
      </div>
    `;
    const result = removeEmptyElements(body);
    expect(result).to.equal('<div class="foo"><span>Foo Bar</span><span>Foo Baz</span><div><span><p>Bar</p></span></div></div>');
  });
});
