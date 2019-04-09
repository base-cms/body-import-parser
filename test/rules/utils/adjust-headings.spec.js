const cheerio = require('cheerio');
const adjustHeadings = require('../../../src/utils/adjust-headings');

describe('utils/strip-whitespace', () => {
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
    const $ = cheerio.load(body);
    adjustHeadings($);
    expect($('h1').length).to.equal(0, 'Number of <h1> elements');
    expect($('h2').length).to.equal(1, 'Number of <h2> elements');
    expect($('h3').length).to.equal(2, 'Number of <h3> elements');
    expect($('h4').length).to.equal(2, 'Number of <h4> elements');
    expect($('h5').length).to.equal(1, 'Number of <h5> elements');
    expect($('h6').length).to.equal(2, 'Number of <h6> elements');
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
    const $ = cheerio.load(body);
    adjustHeadings($);
    expect($('h1').length).to.equal(0, 'Number of <h1> elements');
    expect($('h2').length).to.equal(3, 'Number of <h2> elements');
    expect($('h3').length).to.equal(2, 'Number of <h3> elements');
    expect($('h4').length).to.equal(1, 'Number of <h4> elements');
    expect($('h5').length).to.equal(1, 'Number of <h5> elements');
    expect($('h6').length).to.equal(1, 'Number of <h6> elements');
  });
});
