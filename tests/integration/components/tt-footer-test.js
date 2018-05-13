import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import textLines from 'tilltax/tests/helpers/text-lines';

moduleForComponent('tt-footer', 'Integration | Component | tt footer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tt-footer}}`);

  let expectedLines = [
    '© 2018',
    'Till Tax Accounting & Financial Services LLC |',
    '17446 Hiawatha Beach Drive NE, Ham Lake, MN 55304 |',
    'Contact@TillTax.com'
  ];

  assert.deepEqual(textLines(this.$()), expectedLines);

  // Template block usage:
  this.render(hbs`
    {{#tt-footer}}
      template block text
    {{/tt-footer}}
  `);

  assert.deepEqual(textLines(this.$()), expectedLines);
});
